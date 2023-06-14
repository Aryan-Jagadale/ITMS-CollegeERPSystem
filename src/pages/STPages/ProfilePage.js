import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import Profile from "../../components/SubjectTeacher/My Details/profile";

const ProfilePage = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <Profile user={user} />
    </>
  )
}

export default ProfilePage;