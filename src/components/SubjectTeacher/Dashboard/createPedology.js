import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Exercise from "../../../api/SubjectTeacher/Exercise";
import "./createPedelogy.css";

function Cancel(){
  window.location.href="/ST/Dashboard";
}

const CreatePedology = ({user}) => {

  const [personname, SetPerson] =useState("");
  const [date,SetDate] = useState("");
  const [activityName,SetActicityName] = useState("");
  const [subName,SetSubName] = useState("");
  const [groupNo, SetGroupNo] = useState("");

 
  // const history = useHistory();

  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const exercise = {
      person:personname,
      date:date,
      activity:activityName,
      subject:subName,
      group:groupNo
    }

    console.log(exercise);
   const res = await Exercise.post("/add-exercise",exercise);
   console.log(res.data.msg)
   window.location.href="/ST/Dashboard";
  //  if(res.data.msg =="success"){
  //   //  history.push("/subject-teacher-dashboard");
  //  }
  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        <div>
          <label>Date</label><br/>
          <input 
          className='input-box'
          type = "date"
          name="date"
          value={date}
          onChange={(e) => {
            SetDate(e.target.value);
            SetPerson(user.email);
          }}
          />
        </div>
        <div>
          <label>Activity Name</label><br/>
          <input
          className='input-box' 
          type ="text"
          name ="activityName"
          value = {activityName}
          onChange={(e)=>{
            SetActicityName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Sub Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="subName"
          value ={subName}
          onChange={(e)=>{
            SetSubName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Group NO</label><br/>
          <input 
          className='input-box'
          type = "text"
          name="groupNo"
          value ={groupNo}
          onChange={(e)=>{
            SetGroupNo(e.target.value);
          }}
          />
        </div>
        <input className ="subButton" type="submit" value="Submit"/>
        <input className ="cancelButton" type="button" onClick={Cancel} value="Cancel"/>
      </form>
    </div>
    </div>
  )
}

export default CreatePedology      