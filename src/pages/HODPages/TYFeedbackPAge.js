import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Feedback from "../../components/HOD/Feedback/FeedbackList";

const TYFeedbackPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Feedback user={"pg@gmail.com"} />
    </>
  )
}

export default TYFeedbackPage;