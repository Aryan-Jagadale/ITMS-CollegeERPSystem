import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import ClassDetails from "../../components/ClassTeacher/Dashboard/myClassDetails";
import StudentAchievement from '../../components/ClassTeacher/Dashboard/studentAchievement';

const Dashbord = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <ClassDetails user={user} />
        <StudentAchievement user={user} />
    </>
  )
}

export default Dashbord;