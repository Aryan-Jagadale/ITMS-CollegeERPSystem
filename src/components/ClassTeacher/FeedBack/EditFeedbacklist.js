import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import Feedbacklist from "../../../api/ClassTeacher/Feedbacklist";
import "../../../components/SubjectTeacher/Dashboard/createPedelogy.css"
import { useParams } from "react-router-dom";

function Cancel(){
  window.location.href="/CT/class-feedback";
}


function  EditFeedbacklist() {

  const [year,SetYear] = useState("");
  const [facultyName,SetFacultyName] = useState("");
  const [linkName,SetLinkName] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Feedbacklist.get(`/get-feedbacklist/${params.id}`);
        console.log("res");
        console.log(res.data)
        SetYear( res.data.year);
        SetFacultyName(res.data.faculty);
        SetLinkName(res.data.link);
    }
    HandelGetReq();
  },[SetYear,SetFacultyName,SetLinkName,params.id]);


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
    window.location.href="/CT/class-feedback";
    const formdata = {
        "year":year,
        "faculty":facultyName,
        "link":linkName
    }

    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Feedbacklist.patch(`/update-feedbacklist/${params.id}`,formdata);
   console.log(res.data.msg)

  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        <div>
          <label>Year</label><br/>
          <input 
          className='input-box'
          type = "text"
          name="date"
          value={year}
          onChange={(e) => {
            SetYear(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Faculty Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {facultyName}
          onChange={(e)=>{
            SetFacultyName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Link</label><br/>
          <input
          className='input-box' 
          type ="text"
          name="subName"
          value ={linkName}
          onChange={(e)=>{
            SetLinkName(e.target.value);
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

export default EditFeedbacklist;     