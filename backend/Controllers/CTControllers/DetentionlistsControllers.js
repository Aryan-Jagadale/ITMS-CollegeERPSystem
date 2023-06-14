const Detentionlists = require("../../models/CTmodels/detentionlist.model");

exports.postDetentionlist = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const date = req.body.date;
  const description = req.body.description;
  const link = req.body.link;

  const newDetentionlist = new Detentionlists({ person, date, description, link });

  newDetentionlist
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getDetentionlists = (req, res) => {
    Detentionlists.find({person: req.params.email})
    .then((detentionlists) => res.json(detentionlists))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getDetentionlistById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Detentionlists.findById(req.params.id)
    .then((detentionlist) => res.json(detentionlist))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteDetentionlists = (req, res) => {
  console.log(req.params.id);
  Detentionlists.findByIdAndDelete(req.params.id)
    .then((detentionlist) => res.json("Detention List deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateDetentionlist = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Detentionlists.findOneAndUpdate(
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
