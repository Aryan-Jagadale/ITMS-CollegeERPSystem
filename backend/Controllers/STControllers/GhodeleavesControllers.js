const Ghodeleaves = require("../../models/STmodels/ghodeleave.model");

exports.postGhodeleave = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const date = req.body.date;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const designation = req.body.designation;
  const NoDays = req.body.NoDays;
  const TypeDays = req.body.TypeDays;
  const email = req.body.email;
  const response = req.body.response;
  

  const newGhodeleave = new Ghodeleaves({ person, date, fname, lname, designation, NoDays, TypeDays, email,response});

  newGhodeleave
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getGhodeleaves = (req, res) => {
  Ghodeleaves.find({person: req.params.email})
    .then((ghodeleaves) => res.json(ghodeleaves))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAllGhodeleaves = (req, res) => {
  Ghodeleaves.find()
    .then((ghodeleaves) => res.json(ghodeleaves))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getGhodeleaveById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Ghodeleaves.findById(req.params.id)
    .then((ghodeleave) => res.json(ghodeleave))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteGhodeleaves = (req, res) => {
  console.log(req.params.id);
  Ghodeleaves.findByIdAndDelete(req.params.id)
    .then((ghodeleave) => res.json("Ghodeleave deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateGhodeleave = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Ghodeleaves.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            person: req.body.person,
            date: req.body.date,
            fname: req.body.fname,
            lname: req.body.lname,
            designation: req.body.designation,
            NoDays: req.body.NoDays,
            TypeDays: req.body.TypeDays,
            email: req.body.email,
            response: req.body.response
            
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
  }else{
      console.log("Id null")
  }
  
};
