import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import EditCR from "../../components/SubjectTeacher/My Details/EditCR";

const AddCRPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <EditCR />
    </>
  )
}

export default AddCRPage;