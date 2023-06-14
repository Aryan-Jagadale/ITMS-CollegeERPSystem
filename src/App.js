import React,{ useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import Login from "./components/Login/Login";
import Home from "./components/Dashboard/Homepage";
import Register from "./components/Register/Register";
import NormalPage from "./components/Dashboard/Normalpage";


// HOD Routes

import HODDashboard from "./pages/HODPages/Dashboard";
import SYHODDashboard from "./pages/HODPages/SYDashboard";
import TYHODDashboard from "./pages/HODPages/TYDashboard";
import HODFacultyPage from "./pages/HODPages/HODFacultyPage";
import HODFacultyCRPage from "./pages/HODPages/FacultyCRPage";
import HODLeavePage from "./pages/HODPages/LeavePage";
import EditLeavePage from "./pages/HODPages/EditleavePage";
import FYStudentsPage from "./pages/HODPages/FYStudentsPage";
import SYStudentsPage from "./pages/HODPages/SYStudentsPage";
import TYStudentsPage from "./pages/HODPages/TYStudentsPage";
import FYDetentionPage from "./pages/HODPages/FYDetentionPage";
import SYDetentionPage from "./pages/HODPages/SYDetentionPage";
import TYDetentionPage from "./pages/HODPages/TYDetentionPage";
import HODProfilePage from "./pages/HODPages/ProfilePage";
import FYFeedbackPage from "./pages/HODPages/FYFeedbackPage";
import SYFeedbackPage from "./pages/HODPages/SYFeedbackPage";
import TYFeedbackPage from "./pages/HODPages/TYFeedbackPAge";



// Class Teacher Routes

import CTNavbar from "./components/ClassTeacher/classTeacherNavbar";
import CTDashboard from "./pages/CTPages/Dashboard";
import AddAchievement from "./pages/CTPages/AddAchievement";
import EditAchievementPage from "./pages/CTPages/EditAchievementPage";
import FacultyPage from "./pages/CTPages/FacultyPage";
import AddStudentListPage from "./pages/CTPages/AddStudentListPage";
import EditStudentListPage from "./pages/CTPages/EditStudentListPage";
import DetentionPage from "./pages/CTPages/DetentionPage";
import AddDetentionPage from "./pages/CTPages/AddDetentionPage";
import EditDetentionPage from "./pages/CTPages/EditDetentionPage";
import FeedbackPage from "./pages/CTPages/FeedbackPage";
import AddFeedbackPage from "./pages/CTPages/AddFeedbackPage";
import EditFeedbackPage from "./pages/CTPages/EditFeedbackPage";
import CTProfilePage from "./pages/CTPages/ProfilePage";
import AssignTYSTPage from "./pages/CTPages/AssignTYST";
import Assign6thSem from "./pages/CTPages/Assign6thsemPage";
import Assign1stsemPage from "./pages/CTPages/Assign1stsemPage";
import Assign2ndsemPage from "./pages/CTPages/Assign2ndSemPage";
import Assign3rdsemPage from "./pages/CTPages/Assign3rdsemPage";
import Assign4thsemPage from "./pages/CTPages/Assign4thsemPage";


// Subject Teacher Routes

import STDashboard from "./pages/STPages/Dashboard";
import CreatePedology from "./pages/STPages/CreateFideology";
import EditExercise from "./pages/STPages/EditPedeologyPage";
import StudentsDetails from "./pages/STPages/StudentsDetails";
import SYSTStudentsPage from "./pages/STPages/SYStudentsPage";
import TYSTStudentsPage from "./pages/STPages/TYStudentsPage";
import CRPage from "./pages/STPages/CRPage";
import AddCRPage from "./pages/STPages/AddCRPage";
import EditCRPPage from "./pages/STPages/EditCRPage";
import ProfilePage from "./pages/STPages/ProfilePage";
import LeavePage from "./pages/STPages/LeavePage";
import StudentPage from "./pages/CTPages/StudentPage";
import AddLeavePage from "./pages/STPages/AddLeavePage";
import MyCoursePage from "./pages/STPages/MyCoursePage";
import StudyMaterialPage from "./pages/STPages/StudyMaterialPage";
import AddStudyMaterialPage from "./pages/STPages/AsStudyMaterialPage";
import EditStudyMaterialPage from "./pages/STPages/EditStudyMaterialPAge";


function App() {

  const [user, setLoginUser] = useState();
  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("staffs")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("staffs", JSON.stringify(user))
    setLoginUser(user)
  }


  return (
    <div className="App">
      <Router>
        {/* {
          user && user._id ? <Navbar updateUser={updateUser} /> : <div />
        } */}
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home user={user} /> : <Login updateUser={updateUser} />
            }
          </Route>

          <Route path="/register"><Register /></Route>
          {
            user && user._id ?
              <Route>
                <Route path='/normal'><NormalPage/></Route>
                <Route path='/HOD/Dashboard'><HODDashboard user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/Dashboard/SY-Achievements'><SYHODDashboard user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/Dashboard/TY-Achievements'><TYHODDashboard user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/Faculty'><HODFacultyPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/Faculty-CR'><HODFacultyCRPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/Faculty-Leaves'><HODLeavePage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/edit-leave/:id'><EditLeavePage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/FY-Students'><FYStudentsPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/SY-Students'><SYStudentsPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/TY-Students'><TYStudentsPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/FY-Detention'><FYDetentionPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/SY-Detention'><SYDetentionPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/TY-Detention'><TYDetentionPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/my-profile'><HODProfilePage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/FY-Feedback'><FYFeedbackPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/SY-Feedback'><SYFeedbackPage user={user} updateUser={updateUser}/></Route>
                <Route path='/HOD/TY-Feedback'><TYFeedbackPage user={user} updateUser={updateUser}/></Route>


                

                <Route path='/CT/Dashboard'><CTDashboard user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/add-achievement'><AddAchievement user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/student-achievement/edit/:id'><EditAchievementPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/Faculty'><FacultyPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/student-table'><StudentPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/add-student-list'><AddStudentListPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/studentlist/edit/:id'><EditStudentListPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/class-detentionlist'><DetentionPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/add-detentionlist'><AddDetentionPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/detentionlist/edit/:id'><EditDetentionPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/class-feedback'><FeedbackPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/add-feedback'><AddFeedbackPage user={user} updateUser={updateUser} /></Route>
                <Route path='/CT/edit-feedback/edit/:id'><EditFeedbackPage user={user} updateUser={updateUser} /></Route>
                <Route path="/CT/my-profile"><CTProfilePage user={user} updateUser={updateUser}/></Route>
                <Route path="/CT/assign-5th-sem"><AssignTYSTPage user={user} updateUser={updateUser}/></Route>
                <Route path="/CT/assign-6th-sem"><Assign6thSem user={user} updateUser={updateUser}/></Route>
                <Route path="/CT/assign-1st-sem"><Assign1stsemPage user={user} updateUser={updateUser}/></Route>
                <Route path="/CT/assign-2nd-sem"><Assign2ndsemPage user={user} updateUser={updateUser}/></Route>
                <Route path="/CT/assign-3rd-sem"><Assign3rdsemPage user={user} updateUser={updateUser}/></Route>
                <Route path="/CT/assign-4th-sem"><Assign4thsemPage user={user} updateUser={updateUser}/></Route>



                <Route path='/ST/Dashboard'><STDashboard user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/create-fideology"><CreatePedology user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/edit-fideology/edit/:id"><EditExercise user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/FY-students-details"><StudentsDetails user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/SY-students-details"><SYSTStudentsPage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/TY-students-details"><TYSTStudentsPage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/CR"><CRPage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/add-CR"><AddCRPage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/edit-CR/:id"><EditCRPPage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/my-profile"><ProfilePage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/my-leaves"><LeavePage user={user} updateUser={updateUser}/></Route>
                <Route path="/ST/add-leave"><AddLeavePage user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/my-courses"><MyCoursePage user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/study-material"><StudyMaterialPage user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/add-study-material"><AddStudyMaterialPage user={user} updateUser={updateUser} /></Route>
                <Route path="/ST/edit-study-material/:id"><EditStudyMaterialPage user={user} updateUser={updateUser} /></Route>



              </Route>
              : <Login updateUser={updateUser} />
          }

        </Switch>
      </Router>
    </div>
  );
}

export default App;
