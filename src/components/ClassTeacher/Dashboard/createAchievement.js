import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Achievement from "../../../api/ClassTeacher/Achievement";
import "../../../components/SubjectTeacher/Dashboard/createPedelogy.css";

function Cancel(){
  window.location.href="/CT/Dashboard";
}

const CreateAchievement = ({user}) => {
  const [personname, SetPerson] =useState("");
  const [studentName,SetStudentName] = useState("");
  const [deptName,SetDeptName] = useState("");
  const [instName,SetInstName] = useState("");
  const [eventName, SetEventName] = useState("");
  const [date,SetDate] = useState("");

//avadhut
  // const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const achievement = {
      person: personname,
      sname:studentName,
      dept:deptName,
      institute:instName,
      ename:eventName,
      date:date
    }

    console.log(achievement);
   const res = await Achievement.post("/add-achievement",achievement);
   console.log(res.data.msg)
   window.location.href="/CT/Dashboard";
  //  if(res.data.msg =="success"){
  //   //  history.push("/subject-teacher-dashboard");
  //  }
  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
      <div>
          <label>Student Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="studentName"
          value = {studentName}
          onChange={(e)=>{
            SetStudentName(e.target.value);
            SetPerson(user.email);
          }}
          />
        </div>
        
        <div>
          <label>Department</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="deptName"
          value = {deptName}
          onChange={(e)=>{
            SetDeptName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Institute</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="instName"
          value ={instName}
          onChange={(e)=>{
            SetInstName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Event Name</label><br/>
          <input 
          className='input-box'
          type = "text"
          name="eventName"
          value ={eventName}
          onChange={(e)=>{
            SetEventName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Date</label><br/>
          <input 
          className='input-box'
          type = "date"
          name="date"
          value={date}
          onChange={(e) => {
            SetDate(e.target.value);
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

export default CreateAchievement;    