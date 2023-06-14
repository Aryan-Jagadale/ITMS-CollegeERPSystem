import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Studymaterial from "../../../api/SubjectTeacher/CR";

function Cancel(){
  window.location.href="/ST/CR";
}
const AddCR = ({user}) => {

  const [personname, SetPerson] =useState("");
  const [name,SetName] = useState("");
  const [cryear,SetCRYear] = useState("");
  const [crlink,SetCRLink] = useState("");




  // const history = useHistory();
//avadhut is here
  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const studymaterial = {
      person: personname,
      name:name,
      year:cryear,
      link:crlink
    }

    console.log(studymaterial);
   const res = await Studymaterial.post("/add-studymaterial",studymaterial);
   console.log(res.data.msg)
   window.location.href="/ST/CR";
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
            SetPerson(user.email);
            SetName(user.name);
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

export default AddCR;     