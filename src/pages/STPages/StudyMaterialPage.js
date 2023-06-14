import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import StudyPage from "../../components/SubjectTeacher/Course/studyMaterial";

const StudyMaterialPage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <StudyPage user={user} />
    </>
  )
}

export default StudyMaterialPage;