import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import EditStudents from "../../components/ClassTeacher/Students/EditStudentlist";

const EditStudentListPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <EditStudents />
    </>
  )
}

export default EditStudentListPage;