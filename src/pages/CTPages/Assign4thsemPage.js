import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Assign4thsem from "../../components/ClassTeacher/Assign ST/Second Year/Assign4thsem";

const Assign4thsemPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Assign4thsem />
    </>
  )
}

export default Assign4thsemPage;