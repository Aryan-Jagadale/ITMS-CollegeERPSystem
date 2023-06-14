const Exercises = require("../../models/STmodels/exercise.model");

exports.postExercise = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const date = req.body.date;
  const activity = req.body.activity;
  const subject = req.body.subject;
  const group = Number(req.body.group);

  const newExercise = new Exercises({person, date, activity, subject, group });

  newExercise
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getExercises = (req, res) => {
  console.log("Requestut",req.params.email);
  Exercises.find({person: req.params.email})
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getExerciseById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Exercises.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteExercises = (req, res) => {
  console.log(req.params.id);
  Exercises.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Exercise deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateExercise = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Exercises.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            person: req.body.person,
            date: req.body.date,
            activity: req.body.activity,
            subject: req.body.subject,
            group: req.body.group,
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
