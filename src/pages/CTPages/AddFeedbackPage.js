import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import AddFeedback from "../../components/ClassTeacher/FeedBack/addFeedbacklist";

const AddFeedbackPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <AddFeedback user={user} />
    </>
  )
}

export default AddFeedbackPage;