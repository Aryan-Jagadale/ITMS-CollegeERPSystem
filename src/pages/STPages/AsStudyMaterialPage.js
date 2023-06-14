import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import AddStudyMaterial from "../../components/SubjectTeacher/Course/AddStudymaterial";
const AddStudyMaterialPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <AddStudyMaterial user={user} />
    </>
  )
}

export default AddStudyMaterialPage;