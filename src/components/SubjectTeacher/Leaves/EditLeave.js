import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import Ghodeleave from "../../../../api/GhodeMadam/Ghodeleave";

import { useParams } from "react-router-dom";
import "../Fideology/createPedelogy.css";

function Cancel(){
  window.location.href="/HOD/Facylty-Leave";
}

function  EditGhodeleave() {

    // const [date,SetDate] = useState("");
    // const [fnameName,SetFnameName] = useState("");
    // const [lnameName,SetLnameName] = useState("");
    // const [designationName,SetDesignationName] = useState("");
    // const [NoOfDays,SetNoOfDays] = useState("");
    // const [TypeOfDays,SetTypeOfDays] = useState("");
    // const [emailName,SetEmailName] = useState("");
     const [resName,SetResName] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Ghodeleave.get(`/get-ghodeleave/${params.id}`);
        console.log("res");
        console.log(res.data)
        
        // SetDate( res.data.date);
        // SetFnameName( res.data.fname);
        // SetLnameName( res.data.lname);
        // SetDesignationName( res.data.designation);
        // SetNoOfDays( res.data.NoDays);
        // SetTypeOfDays( res.data.TypeDays);
        // SetEmailName(res.data.email);
        SetResName(res.data.response);
    }
    HandelGetReq();
  },[SetResName, params.id]);


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
        // "date":date,
        // "fname":fnameName,
        // "lname":lnameName,
        // "designation":designationName,
        // "NoOfDays":NoOfDays,
        // "TypeOfLeave":TypeOfDays,
        // "email":emailName,
        "response":resName,
    }
    window.location.href="/HOD/Facylty-Leave";
    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Ghodeleave.patch(`/update-ghodeleave/${params.id}`,formdata);
   console.log(res.data.msg)
   

  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        {/* <div>
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
        <div>
          <label>First Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {fnameName}
          onChange={(e)=>{
            SetFnameName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Last Name</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="subName"
          value ={lnameName}
          onChange={(e)=>{
            SetLnameName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Designation</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {designationName}
          onChange={(e)=>{
            SetDesignationName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>No Of Days</label><br/>
          <input 
          className='input-box'
          type ="number"
          name ="activityName"
          value = {NoOfDays}
          onChange={(e)=>{
            SetNoOfDays(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Type of Leave</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {TypeOfDays}
          onChange={(e)=>{
            SetTypeOfDays(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Email</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {emailName}
          onChange={(e)=>{
            SetEmailName(e.target.value);
          }}
          />
        </div> */}

                     

        <div>
          <label>Response</label><br/>
          {/* <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {resName}
          onChange={(e)=>{
            SetResName(e.target.value);
          }}
          /> */}

                      <select
                      className='input-box res-box'
                        value = {resName}
                        required
                        onChange={(e)=>{
                          SetResName(e.target.value);
                        }}
                        
                      >
                        <option value=""></option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                        
                      </select>

        </div>
        
        <input className ="subButton" type="submit" value="Submit"/>
        <input className ="cancelButton" type="button" onClick={Cancel} value="Cancel"/>
      </form>
    </div>
    </div>
  )
}

export default EditGhodeleave;     