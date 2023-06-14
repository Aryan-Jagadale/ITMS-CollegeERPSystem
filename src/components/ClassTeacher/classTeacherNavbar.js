import React from "react";
import "./classTeacherNavbar.css";
import {Link} from 'react-router-dom';
import RautMadamimg from '../../images/raut-madam.jpg'


function eventHandle() {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}
const classTeacherNavbar = ({user, updateUser}) => {
  let assign = "";
  if(user.email == "a1@gmail.com"){
    assign = "/CT/assign-1st-sem";
  }
  else if(user.email == "pf@gmail.com"){
    assign = "/CT/assign-3rd-sem";
  }else{
    assign = "/CT/assign-5th-sem";
  }
  return (
    <div>
      <div className="sidebar close">
        <div className="logo-details">
          <img alt=""
            className="gpa_logo" 
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span className="logo_name">GPA</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/CT/Dashboard">
              <i className="bx bx-home-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/CT/Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          {/* <li>
            <div class="iocn-link">
              <Link to="">
                <i class="bx bx-user"></i>
                <span class="link_name">Faculty</span>
              </Link>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link to="" class="link_name">
                Faculty
                </Link>
              </li>
              <li>
                <Link to="/student-details">First Year</Link>
              </li>
              <li>
                <Link to="/student-details">Second Year</Link>
              </li>
              <li>
                <Link to="/student-details">Third Year</Link>
              </li>
            </ul>
          </li> */}

          <li>
            <Link to="/CT/Faculty">
              <i className="bx bxs-user"></i>
              <span className="link_name">Faculty</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/CT/Faculty">
                Faculty
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={assign}>
              <i className="bx bx-file-find"></i>
              <span className="link_name">Assign Course</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/CT/assign-5th-sem">
                Assign Course
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="/Ct/student-table">
              <i className="bx bxs-user"></i>
                <span className="link_name">Students</span>
              </Link>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/CT/student-table">
                Students
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/CT/class-detentionlist">
              <i className="bx bx-food-menu"></i>
              <span className="link_name">Detention List</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/CT/class-detentionlist">
                 Detention List
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a className="link_name" rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1QSjpK5C75lgn5rx_DTA4GLBc3-m3TbLc/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true">
              <i className="bx bx-spreadsheet"></i>
              <span className="link_name">Result Analysis</span>
              </a>
            <ul className="sub-menu blank">
              <li>
              <a className="link_name" rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1QSjpK5C75lgn5rx_DTA4GLBc3-m3TbLc/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true">
                Result Analysis
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="/CT/class-feedback">
              <i className="bx bxs-comment-detail"></i>
                <span className="link_name">Feedback</span>
              </Link>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/CT/class-feedback">
                Feedback
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/CT/my-profile">
              <i className="bx bxs-user"></i>
              <span className="link_name">My Profile</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/CT/my-profile">
                My Profile
                </Link>
              </li>
            </ul>
          </li>

          <li onClick={() => updateUser({})}>
              <i className="bx bx-log-out"></i>
              <span className="link_name">Logout</span>
            <ul className="sub-menu blank">
              <li>
                  Logout
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img alt="" src={RautMadamimg} />
              </div>
              <div className="name-job">
                <div className="profile_name">{user.name}</div>
                <div className="job">Class Teacher</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={eventHandle}></i>
          <span className="text">Class Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default classTeacherNavbar;