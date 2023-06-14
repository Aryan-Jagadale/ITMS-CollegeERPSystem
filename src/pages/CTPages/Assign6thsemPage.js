import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
// import Assign5thST from "../../components/ClassTeacher/Assign ST/Third Year/AssignST/AssignST6th";
import Assign6thST from '../../components/ClassTeacher/Assign ST/Third Year/AssignST/AssignST5th';

const AssignTYSTPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        {/* <Assign5thST /> */}
        <Assign6thST />
    </>
  )
}

export default AssignTYSTPage;