import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";


import Exercise from "../../../api/SubjectTeacher/Exercise";

import { useParams } from "react-router-dom";
import "./createPedelogy.css";

function Cancel(){
  window.location.href="/ST/Dashboard";
}

function  EditExercise() {

  const [personname, SetPerson] = useState("");
  const [date,SetDate] = useState("");
  const [activityName,SetActicityName] = useState("");
  const [subName,SetSubName] = useState("");
  const [groupNo, SetGroupNo] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Exercise.get(`/get-exercise/${params.id}`);
        console.log("res");
        console.log(res.data)
        SetPerson(res.data.person);
        SetDate( res.data.date);
        SetActicityName(res.data.activity);
        SetSubName(res.data.subject);
        SetGroupNo(res.data.group);
    }
    HandelGetReq();
  },[SetPerson,SetDate,SetActicityName,SetSubName,SetGroupNo,params.id]);


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
    
    const formdata = {
        "person":personname,
        "date":date,
        "activity":activityName,
        "subject":subName,
        "group":groupNo
    }
    window.location.href="/ST/Dashboard";
    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Exercise.patch(`/update-exercise/${params.id}`,formdata);
   console.log(res.data.msg)
  
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
            SetPerson(personname);
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

export default EditExercise      