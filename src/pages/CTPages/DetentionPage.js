import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Detention from "../../components/ClassTeacher/Detention/DetentionList";

const DetentionPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Detention user={user} />
    </>
  )
}

export default DetentionPage;