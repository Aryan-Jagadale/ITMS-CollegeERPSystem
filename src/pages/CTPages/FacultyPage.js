import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Facultys from '../../components/ClassTeacher/Faculty/Facultys';

const FacultyPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Facultys />
    </>
  )
}

export default FacultyPage;