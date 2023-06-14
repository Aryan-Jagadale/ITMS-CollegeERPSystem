import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import AddCR from '../../components/SubjectTeacher/My Details/AddCR';

const AddCRPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <AddCR user={user}/>
    </>
  )
}

export default AddCRPage;