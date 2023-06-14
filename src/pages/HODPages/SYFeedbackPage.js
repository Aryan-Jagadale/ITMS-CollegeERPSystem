import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Feedback from "../../components/HOD/Feedback/FeedbackList";

const SYFeedbackPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Feedback user={"pf@gmail.com"} />
    </>
  )
}

export default SYFeedbackPage;