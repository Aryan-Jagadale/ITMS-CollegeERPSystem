import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Course from "../../components/SubjectTeacher/Course/subject";

const MyCoursePage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Course user={user} />
    </>
  )
}

export default MyCoursePage;