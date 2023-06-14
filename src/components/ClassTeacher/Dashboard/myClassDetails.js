import React from "react";
import "./myClassDetails.css";

function CheckTeacher(email){
  if(email == "pg@gmail.com"){
    return "Third Year ";
  }else if(email == "pf@gmail.com"){
    return "Second Year ";
  }else{
    return "First Year ";
  }
}
const myClassDetails = ({user}) => {
  return (
    
      <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-center" id="row">
        <div className="sub1">
          <p className="subname">Students</p>
          <p className="subcode">71</p>
        </div>
        <div className="sub2">
          <p className="subname">Teachers</p>
          <p className="subcode">7</p>
        </div>
        <div className="sub3">
          <p className="subname">Courses</p>
          <p className="subcode">6 + 5 = 11</p>
        </div>
        
        <div className="it">
            <h3>{CheckTeacher(user.email)}(2021 - 22)</h3>
        </div>
      </div>

  );
}

export default myClassDetails;
