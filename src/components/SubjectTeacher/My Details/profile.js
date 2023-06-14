import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";
import Exercise from "../../../api/SubjectTeacher/Exercise";
import { useParams } from "react-router-dom";
import './profile.css';
import axios from "axios";

function Cancel(){
    window.location.href="/ST/Dashboard";
}

const Profile = ({user}) => {

    const [username, SetName] = useState("");
    const [emailId, SetEmailId] = useState("");
    const [pass, SetPass] = useState("");

    useEffect(()=>{
        const HandelGetReq= async ()=>{
            console.log(user._id)
            // const res = axios.get(`/get-user/${user._id}`);
            // console.log("res");
            // console.log(res.data)
            // SetName( res.data.name);
            // SetEmailId(res.data.email);
            // SetPass(res.data.password);
            axios.get(`http://localhost:5001/get-user/${user._id}`)
            .then(res => {
              console.log("This is new")
              console.log(res.data)
              SetName(res.data.name);
              SetEmailId(res.data.email);
              SetPass(res.data.password);
          })
        }
        HandelGetReq();
      },[SetName,SetEmailId,SetPass,user._id]);
    

      const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = async() =>{
        const formdata = {
            "name":username,
            "email":emailId,
            "password":pass
        }
        window.location.href="/ST/Dashboard";
        console.log("req")
        console.log(user._id)
        console.log(formdata)
        axios.patch(`http://localhost:5001/update-user/${user._id}`,formdata)
        .then(res => {
          console.log("This is update sec")
          console.log(res.data)
      })
      
      }

      
    return (
//         <div className='profile-main'>
//             <div className="profile">
//             <div className="profile_box">
//             <label className="security">Security Setting</label><br />
//             <input className="update" type="text" name="username" placeholder="Username" /><br />
//             <input className="update" type="text" name="cur_pass" placeholder="Current Password" /><br />
//             <input className="update" type="text" name="new_pass" placeholder="New Password" /><br />
//             <button className="submit">Submit</button>
//             </div>
//             </div>

// </div>);

<div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        <div>
          <label>Name</label><br/>
          <input 
          className='input-box'
          type = "text"
          name="name"
          value={username}
          onChange={(e) => {
            SetName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Email ID</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="emailId"
          value = {emailId}
          onChange={(e)=>{
            SetEmailId(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Password</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="password"
          value ={pass}
          onChange={(e)=>{
            SetPass(e.target.value);
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

export default Profile;





