import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Leave from "../../components/SubjectTeacher/Leaves/leaveForm";

const LeavePage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Leave user={user} />
    </>
  )
}

export default LeavePage;