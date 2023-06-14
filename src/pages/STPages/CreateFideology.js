import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Createform from '../../components/SubjectTeacher/Dashboard/createPedology';

const CreatePedology = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Createform user={user}/>
    </>
  )
}

export default CreatePedology;