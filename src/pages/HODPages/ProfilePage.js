import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Profile from '../../components/HOD/Profile/profile';

const HODProfilePage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Profile user={user} />
    </>
  )
}

export default HODProfilePage;