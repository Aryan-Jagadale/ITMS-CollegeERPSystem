import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import EditPedeology from "../../components/SubjectTeacher/Dashboard/EditExercise";

const CreatePedology = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <EditPedeology />
    </>
  )
}

export default CreatePedology;