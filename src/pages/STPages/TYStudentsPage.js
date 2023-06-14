import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Students from "../../components/HOD/Students/StudentsList";

const TYStudentsPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Students user={"pg@gmail.com"} />
    </>
  )
}

export default TYStudentsPage;