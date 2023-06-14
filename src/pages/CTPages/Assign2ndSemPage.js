import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Assign2ndSem from "../../components/ClassTeacher/Assign ST/First Year/Assign2ndsem";

const Assign2ndsemPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Assign2ndSem />
    </>
  )
}

export default Assign2ndsemPage;