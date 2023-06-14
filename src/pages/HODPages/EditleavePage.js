import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import EditLeave from "../../components/HOD/Faculty/Leaves/EditLeave";

const EditLeavePage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <EditLeave />
    </>
  )
}

export default EditLeavePage;