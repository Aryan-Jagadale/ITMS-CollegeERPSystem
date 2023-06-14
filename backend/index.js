const express = require("express")
const app = express()
const env = require("dotenv")
env.config()
const cors = require("cors")
const mongoose = require("mongoose")

const uri = process.env.ATLAS_URI;

try{
    mongoose.connect(uri);
    const connection = mongoose.connection;
    connection.once("open", () => {
    console.log("Mongodb database connection established successfully !!");
});
}catch(err){
    console.log("DB not connected");
    process.exit();
}

app.use(express.json())
app.use(express.static('public'));
app.use(cors())


// Class Teachers Routes
const TYAchievementsRouter = require("./routes/CTroutes/AchievementsRoutes");
app.use("/TYachievements", TYAchievementsRouter);

const TYStudentlistsRouter = require("./routes/CTroutes/StudentlistsRoutes");
app.use("/TYstudentlists", TYStudentlistsRouter);

const TYDetentionlistsRouter = require("./routes/CTroutes/DetentionlistsRoutes");
app.use("/TYdetentionlists", TYDetentionlistsRouter);

const TYFeedbacklistsRouter = require('./routes/CTroutes/FeedbacklistsRoutes');
app.use('/TYfeedbacklists', TYFeedbacklistsRouter);

const TYAssignSubjectRouter = require('./routes/CTroutes/TYAssignRoutes');
app.use('/AssignSubjects', TYAssignSubjectRouter);



// Subject Teacher Routes
const GhodeExercisesRouter = require("./routes/STroutes/ExercisesRoutes");
app.use("/Ghodeexercises", GhodeExercisesRouter);

const GhodeLeavesRouter = require("./routes/STroutes/GhodeleavesRoutes");
app.use("/Ghodeleaves", GhodeLeavesRouter);

const GhodeStudymaterialsRouter = require("./routes/STroutes/StudymaterialsRoutes");
app.use("/studymaterials", GhodeStudymaterialsRouter);

const STCRRouter = require("./routes/STroutes/CRRoutes");
app.use("/CR", STCRRouter);


// -------------------------------------------- LOGIN SCHEMA --------------------------------------------
 
const userSchema = new mongoose.Schema({
    post: String,
    name: String,
    email: String,
    password: String
})
const User = new mongoose.model("User", userSchema);

// --------------------------------------------- ROUTES -------------------------------------------- 

// app.get("/",(req,res) => {
//     res.send("Main Page");
// })
app.post("/login",(req,res) => {
    // res.send("My API Login");
    const {post, email, password} = req.body
    User.findOne({email:email}, (err, user) => {
        if(user){
            if(password === user.password){
                if(post === user.post){
                    res.send({message: "Login successfully .. !!", user: user});
                }
                else{
                    res.send({message: "Please select correct post..."});
                }
            }else{
                res.send({message: "Please enter correct Password ..!!"});
            }
        }else{
            res.send({message: "User is not Registered..!!"});
        }
    })
})

app.post("/register", (req,res) => {
    const {post, name, email, password} = req.body;
    User.findOne({email:email},(err,user) => {
        if(user){
            res.send("User is already registred");
        }else{
            const user = new User({
                post,
                name,
                email,
                password
            })
            user.save(err => {
                if(err){
                    res.send(err);
                }else{
                    res.send({message: "Succesfully Registered..!!"});
                }
            })
        }
    })
})
app.get("/get-user/:id", (req,res) => {
    console.log("hello");
    console.log(req.params.id);
    User.findById(req.params.id)
      .then((exercise) => res.json(exercise))
      .catch((err) => res.status(400).json("Error: " + err));
})

app.get("/get-users/:post", (req,res) => {
    console.log(req.params)
    User.find({post: req.params.post})
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
})

app.patch("/update-user/:id", (req,res) => {

    console.log("update");
  if(req.params.id !=null){
    console.log("user back",req.body)
    User.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          },(error,data)=>{
              if(error){
                  console.log(error);
                //   res.json(error);
              }else{
                  console.log(data);
                //   res.json(data);
              }
          }
      );
    }
})

// ---------------------------------- PORT 5000 Connection --------------------------------------

  app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT ||5001}`))