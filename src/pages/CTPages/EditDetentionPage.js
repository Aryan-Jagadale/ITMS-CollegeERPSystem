import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import EditDetention from "../../components/ClassTeacher/Detention/EditDetentionlist";

const EditDetentionPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <EditDetention />
    </>
  )
}

export default EditDetentionPage;