import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import Studymaterial from "../../../api/SubjectTeacher/CR";
import { useParams } from "react-router-dom";
import "../../SubjectTeacher/Dashboard/createPedelogy.css";

function Cancel(){
  window.location.href="/ST/CR";
}

function  EditStudymaterial() {


  const [cryear,SetCRYear] = useState("");
  const [crlink,SetCRLink] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Studymaterial.get(`/get-studymaterial/${params.id}`);
        console.log("res");
        console.log(res.data)
        SetCRYear( res.data.year);
        SetCRLink(res.data.link);
    }
    HandelGetReq();
  },[SetCRYear,SetCRLink,params.id]);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{    
    const formdata = {
        "year":cryear,
        "link":crlink
    }
    window.location.href="/ST/CR";
    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Studymaterial.patch(`/update-studymaterial/${params.id}`,formdata);
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
          value={cryear}
          onChange={(e) => {
            SetCRYear(e.target.value);
          }}
          />
        </div>
        <div>
          <label>CR Link</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {crlink}
          onChange={(e)=>{
            SetCRLink(e.target.value);
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

export default EditStudymaterial;     