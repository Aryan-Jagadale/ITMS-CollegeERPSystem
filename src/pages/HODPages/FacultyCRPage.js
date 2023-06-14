import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import FacultyCR from '../../components/HOD/Faculty/FacultyCR';

const FacultyCRPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <FacultyCR />
    </>
  )
}

export default FacultyCRPage;