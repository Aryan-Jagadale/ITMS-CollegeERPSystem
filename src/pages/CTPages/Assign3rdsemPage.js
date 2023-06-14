import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Assign3rdsem from "../../components/ClassTeacher/Assign ST/Second Year/Assign3rdSem";

const Assign3rdsemPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Assign3rdsem />
    </>
  )
}

export default Assign3rdsemPage;