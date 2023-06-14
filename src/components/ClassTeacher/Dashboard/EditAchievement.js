import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import Achievement from "../../../api/ClassTeacher/Achievement";
import "../../../components/SubjectTeacher/Dashboard/createPedelogy.css"

import { useParams } from "react-router-dom";

function Cancel(){
  window.location.href="/CT/Dashboard";
}

function  EditAchievement() {

  const [studentName,SetStudentName] = useState("");
  const [deptName,SetDeptName] = useState("");
  const [instName,SetInstName] = useState("");
  const [eventName, SetEventName] = useState("");
  const [date,SetDate] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Achievement.get(`/get-achievement/${params.id}`);
        console.log("res");
        console.log(res.data)
        SetStudentName(res.data.sname);
        SetDeptName(res.data.dept);
        SetInstName(res.data.institute);
        SetEventName(res.data.ename);
        SetDate( res.data.date);
    }
    HandelGetReq();
  },[SetStudentName,SetDeptName,SetInstName,SetEventName,SetDate,params.id]);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    // const formdata = new FormData();
    // formdata.append("date",date);
    // formdata.append("activity",activityName);
    // formdata.append("subject",subName);
    // formdata.append("group",groupNo);
    window.location.href="/CT/Dashboard";
    const formdata = {
        "sname":studentName,
        "dept":deptName,
        "institute":instName,
        "ename":eventName,
        "date":date
    }

    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Achievement.patch(`/update-achievement/${params.id}`,formdata);
   console.log(res.data.msg)
   

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

export default EditAchievement;    