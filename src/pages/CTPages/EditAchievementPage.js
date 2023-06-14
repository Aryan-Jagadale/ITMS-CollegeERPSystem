import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import EditAchievement from "../../components/ClassTeacher/Dashboard/EditAchievement";

const ModifyAchievement = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <EditAchievement />
    </>
  )
}

export default ModifyAchievement;