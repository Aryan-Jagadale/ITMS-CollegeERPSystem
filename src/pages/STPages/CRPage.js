import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import CR from "../../components/SubjectTeacher/My Details/CR";

const CRPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <CR user={user}/>
    </>
  )
}

export default CRPage;