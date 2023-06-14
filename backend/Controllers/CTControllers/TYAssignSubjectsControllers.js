const Studentlists = require("../../models/CTmodels/TYAssignSub.model");

exports.postStudentlist = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const subject= req.body.subject;

  const newStudentlist = new Studentlists({ name, email, subject });

  newStudentlist
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getStudentlists = (req, res) => {
  console.log("assign email", req.params.email);
  Studentlists.find({email: req.params.email})
    .then((subjects) => res.json(subjects))
    .catch((err) => res.status(400).json("Error: " + err));
};

