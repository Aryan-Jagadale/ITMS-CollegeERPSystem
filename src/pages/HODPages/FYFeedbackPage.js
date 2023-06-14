import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Feedback from "../../components/HOD/Feedback/FeedbackList";

const FYFeedbackPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Feedback user={"a1@gmail.com"} />
    </>
  )
}

export default FYFeedbackPage;