import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Assign1stsem from "../../components/ClassTeacher/Assign ST/First Year/Assign1stSem";

const Assign1stsemPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Assign1stsem />
    </>
  )
}

export default Assign1stsemPage;