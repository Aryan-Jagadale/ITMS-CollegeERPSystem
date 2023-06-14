const Achievements = require("../../models/CTmodels/achievement.model");

exports.postAchievement = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const sname = req.body.sname;
  const dept = req.body.dept;
  const institute = req.body.institute;
  const ename = req.body.ename;
  const date = req.body.date;

  
  const newAchievement = new Achievements({ person, sname, dept, institute, ename, date });

  newAchievement
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getAchievements = (req, res) => {
  Achievements.find({person: req.params.email})
    .then((achievements) => res.json(achievements))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAchievementById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Achievements.findById(req.params.id)
    .then((achievement) => res.json(achievement))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteAchievements = (req, res) => {
  console.log(req.params.id);
  Achievements.findByIdAndDelete(req.params.id)
    .then((achievement) => res.json("Achievement deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateAchievement = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Achievements.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            sname: req.body.sname,
            dept: req.body.dept,
            institute: req.body.institute,
            ename: req.body.ename,
            date: req.body.date
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
