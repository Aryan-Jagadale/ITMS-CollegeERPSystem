import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import CreateAchievement from '../../components/ClassTeacher/Dashboard/createAchievement';

const AddAchievement = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <CreateAchievement user={user} />
    </>
  )
}

export default AddAchievement;