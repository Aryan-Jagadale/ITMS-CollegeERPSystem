const Studymaterials = require("../../models/STmodels/CR.model");

exports.postStudymaterial = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const name = req.body.name;
  const year = req.body.year;
  const link = req.body.link;

  const newStudymaterial = new Studymaterials({person, name, year, link });

  newStudymaterial
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getStudymaterials = (req, res) => {
  Studymaterials.find({person: req.params.email})
    .then((studymaterials) => res.json(studymaterials))
    .catch((err) => res.status(400).json("Error: " + err));
};
exports.getAllStudymaterials = (req, res) => {
  Studymaterials.find()
    .then((studymaterials) => res.json(studymaterials))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getStudymaterialById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Studymaterials.findById(req.params.id)
    .then((studymaterial) => res.json(studymaterial))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteStudymaterials = (req, res) => {
  console.log(req.params.id);
  Studymaterials.findByIdAndDelete(req.params.id)
    .then((studymaterial) => res.json("Material deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateStudymaterial = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Studymaterials.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            year: req.body.year,
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
