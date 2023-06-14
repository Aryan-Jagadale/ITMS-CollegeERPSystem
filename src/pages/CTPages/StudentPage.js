import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Students from "../../components/ClassTeacher/Students/StudentList";

const StudentPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Students user={user} />
    </>
  )
}

export default StudentPage;