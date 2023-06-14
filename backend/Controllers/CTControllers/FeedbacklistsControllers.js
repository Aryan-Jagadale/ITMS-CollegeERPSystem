const Feedbacklists = require("../../models/CTmodels/feedbacklist.model");

exports.postFeedbacklist = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const person = req.body.person;
  const year = req.body.year;
  const faculty = req.body.faculty;
  const link = req.body.link;

  const newFeedbacklist = new Feedbacklists({person, year, faculty, link });

  newFeedbacklist
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getFeedbacklists = (req, res) => {
    Feedbacklists.find({person: req.params.email})
    .then((feedbacklists) => res.json(feedbacklists))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getFeedbacklistById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Feedbacklists.findById(req.params.id)
    .then((feedbacklist) => res.json(feedbacklist))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteFeedbacklists = (req, res) => {
  console.log(req.params.id);
  Feedbacklists.findByIdAndDelete(req.params.id)
    .then((feedbacklist) => res.json("Feedback List deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateFeedbacklist = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Feedbacklists.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            year: req.body.year,
            faculty: req.body.faculty,
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
