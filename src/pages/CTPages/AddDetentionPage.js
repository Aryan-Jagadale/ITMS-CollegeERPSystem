import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import AddDetention from "../../components/ClassTeacher/Detention/addDetentionlist";

const AddDetentionPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <AddDetention user={user} />
    </>
  )
}

export default AddDetentionPage;