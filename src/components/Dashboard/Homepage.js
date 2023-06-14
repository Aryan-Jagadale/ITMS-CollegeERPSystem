import React from "react";
import "./Homepage.css";

const Homepage = ({user}) => {
    console.log(user.post);
    
    if(user.post === "HOD"){
        window.location.href = "/HOD/Dashboard";
    }
    else if(user.post === "CT") {
        window.location.href = "/CT/Dashboard";
    }
    else{
        window.location.href = "/ST/Dashboard";
    }

    return (
        <div class="loader">
        <span class="loader__element"></span>
        <span class="loader__element"></span>
        <span class="loader__element"></span>
      </div>
    );
}

export default Homepage;