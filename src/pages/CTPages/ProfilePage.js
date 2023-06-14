import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import Profile from "../../components/ClassTeacher/Profile/profile";

const ProfilePage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <Profile user={user} />
    </>
  )
}

export default ProfilePage;