import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Addleave from '../../components/SubjectTeacher/Leaves/AddLeave';

const AddLeavePage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Addleave user={user}/>
    </>
  )
}

export default AddLeavePage;