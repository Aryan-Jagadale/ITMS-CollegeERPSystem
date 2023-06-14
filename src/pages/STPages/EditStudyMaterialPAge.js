import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import EditStudymaterial from '../../components/SubjectTeacher/Course/EditStudymaterial';


const EditStudyMaterialPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <EditStudymaterial />
    </>
  )
}

export default EditStudyMaterialPage;