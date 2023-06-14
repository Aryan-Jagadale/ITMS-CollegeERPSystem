const Studentlists = require("../../models/CTmodels/studentlist.model");

exports.postStudentlist = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const date = req.body.date;
  const description = req.body.description;
  const link = req.body.link;

  const newStudentlist = new Studentlists({ person, date, description, link });

  newStudentlist
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getStudentlists = (req, res) => {
  Studentlists.find({person: req.params.email})
    .then((studentlists) => res.json(studentlists))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getStudentlistById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Studentlists.findById(req.params.id)
    .then((studentlist) => res.json(studentlist))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteStudentlists = (req, res) => {
  console.log(req.params.id);
  Studentlists.findByIdAndDelete(req.params.id)
    .then((studentlist) => res.json("Student List deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateStudentlist = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Studentlists.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            date: req.body.date,
            description: req.body.description,
            link: req.body.link
            
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
