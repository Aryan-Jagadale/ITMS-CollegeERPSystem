import React, { useState } from "react";
import "./Register.css";
// import "../Signup/signup.css";
// import loginIcon from "../../images/login-icon.svg"
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        post:"",
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const HandleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { post, name, email, password, reEnterPassword } = user
        if (post && name && email && password && (password === reEnterPassword)) {
            // alert("Posted");
            axios.post("http://localhost:5001/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        }
        else {
            alert("Incorrect");
        }
    }

    return (
        <div className="RegisterPage">
            <h5 className="GPA">GOVERNMENT POLYTECHNIC, AWASARI (KH)</h5>
            <h3 className="IT-MS">INFORMATION TECHNOLOGY DEPARTMENT MIS SYSTEM</h3>
      
            {/* <img className="login-icon" src={loginIcon} alt="" /> */}
            <h4 className="log">Register</h4>
            
            <div className="register">
            {/* {console.log("User", user)} */}
            {/* <h1 className="register-title">Register</h1> */}

            <div className="btn-div-reg1">
                <button className="reg-btn1" name="post" value="HOD" onClick={HandleChange}>HOD</button>
                <button className="reg-btn1" name="post" value="CT" onClick={HandleChange}>Class Teacher</button>
                <button className="reg-btn1" name="post" value="ST" onClick={HandleChange}>Subject Teacher</button>
            </div>
            <br/>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={HandleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={HandleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={HandleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={HandleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div className="or-color">or</div>
            <div className="button" onClick={() => { history.push("/") }}>Login</div>
        </div>
        </div>
        
    );
}

export default Register;