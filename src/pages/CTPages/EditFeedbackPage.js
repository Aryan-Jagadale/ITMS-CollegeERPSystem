import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import EditFeedback from "../../components/ClassTeacher/FeedBack/EditFeedbacklist";

const EditFeedbackPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <EditFeedback />
    </>
  )
}

export default EditFeedbackPage;