//import React, { useContext } from "react";
import "./STNavbar.css";
import {Link} from 'react-router-dom';
import GhodeMadamImg from "../../images/ghode-madam.svg"



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

const subNavbar = ({user, updateUser}) => {
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
            <Link to="/ST/Dashboard">
              <i className="bx bx-home-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/ST?Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="/ST/FY-students-details">
                <i className="bx bx-user"></i>
                <span className="link_name">Students</span>
              </Link>
              <i  onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link to="/ST/FY-students-details" className="link_name">
                Students
                </Link>
              </li>
              <li>
                <Link to="/ST/FY-students-details">First Year</Link>
              </li>
              <li>
                <Link to="/ST/SY-students-details">Second Year</Link>
              </li>
              <li>
                <Link to="/ST/TY-students-details">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/ST/my-courses">
              <i className="bx bx-book"></i>
              <span className="link_name">Course</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/ST/my-courses">
                Course
                </Link>
              </li>
            </ul>
          </li>

          {/* <li>
            <a rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1C7-8spoquQK5-eqn5A2549EhT5bIS9wJ/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true" >
              <i className="bx bx-file-find"></i>
              <span className="link_name">CPP Project</span>
            </a>
            <ul className="sub-menu blank">
              <li>
              <a className="link_name" rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1C7-8spoquQK5-eqn5A2549EhT5bIS9wJ/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true" >CPP Project</a>
              </li>
            </ul>
          </li> */}

          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className="bx bxs-book-content"></i>
                <span className="link_name">Time Table</span>
              </Link>
              <i onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="#">
                Time Table
                </Link>
              </li>
              <li>
              <a href="https://drive.google.com/file/d/1chDe5cx6ljpuNmQ1nOH8MrPsq7F149MZ/view?" rel="noreferrer" target='_blank'>First Year</a>
              </li>
              <li>
              <a rel="noreferrer" target='_blank' href="https://drive.google.com/file/d/1w_1HrLTeJM02rtjA6pjyGuzv-2N-F7dp/view">Second Year</a>
              </li>
              <li>
              <a rel="noreferrer" target='_blank' href="https://drive.google.com/file/d/1u9kw1RYBUUFIw8cKsDvTdHjid0yGAcol/view">Third Year</a>
              </li>
            </ul>
          </li>

          <li>
            <a rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1VSU4l-07IkyRa06aYnHO_7EnTx85G1Nz?usp=sharing">
              <i className="bx bx-food-menu"></i>
              <span className="link_name">Teaching / Lab Plan</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a rel="noreferrer" target='_blank' className="link_name" href="https://drive.google.com/drive/folders/1VSU4l-07IkyRa06aYnHO_7EnTx85G1Nz?usp=sharing">
                 Teaching / Lab Plan
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1QSjpK5C75lgn5rx_DTA4GLBc3-m3TbLc/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'>
              <i className="bx bx-spreadsheet"></i>
              <span className="link_name">Result Analysis</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1QSjpK5C75lgn5rx_DTA4GLBc3-m3TbLc/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'>
                Result Analysis
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className="bx bxs-user"></i>
                <span className="link_name">My Details</span>
              </Link>
              <i onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="#">
                My Details
                </Link>
              </li>
              <li>
                <Link to="/ST/CR">CR</Link>
              </li>
              <li>
                <Link to="/ST/my-profile">Profile</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/ST/my-leaves">
              <i className="bx bxs-comment-detail"></i>
              <span className="link_name">Leaves</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/ST/my-leaves">
                Leaves
                </Link>
              </li>
            </ul>
          </li>

          <li onClick={() => updateUser({})}>
              <i className="bx bx-log-out"></i>
              <span className="link_name">Logout</span>
            <ul className="sub-menu blank">
              <li className="link_name">
                  Logout
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img alt="" src={GhodeMadamImg} />
              </div>
              <div className="name-job">
                <div className="profile_name">{user.name}</div>
                <div className="job">Lecturer in IT</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={eventHandle}></i>
          <span className="text">Subject Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default subNavbar;