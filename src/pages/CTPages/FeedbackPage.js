import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import FeedBack from "../../components/ClassTeacher/FeedBack/FeedbackList";

const FeedbackPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <FeedBack user={user} />
    </>
  )
}

export default FeedbackPage;