import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Studentlist from "../../../api/ClassTeacher/Studentlist";
import "../../../components/SubjectTeacher/Dashboard/createPedelogy.css"

function Cancel(){
  window.location.href="/CT/student-table";
}

const AddStudentList = ({user}) => {
  const [personname, SetPerson] =useState("");
  const [date,SetDate] = useState("");
  const [descriptionName,SetDescriptionName] = useState("");
  const [linkName,SetLinkName] = useState("");


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const studentlist = {
      person:personname,
      date:date,
      description:descriptionName,
      link:linkName
    }

    console.log(studentlist);
   const res = await Studentlist.post("/add-studentlist",studentlist);
   console.log(res.data.msg)
   window.location.href="/CT/student-table";
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
          <label>Year</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {descriptionName}
          onChange={(e)=>{
            SetDescriptionName(e.target.value);
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

export default AddStudentList;     