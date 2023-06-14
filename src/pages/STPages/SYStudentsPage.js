import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Students from "../../components/HOD/Students/StudentsList";

const SYStudentsPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Students user={"pf@gmail.com"} />
    </>
  )
}

export default SYStudentsPage;