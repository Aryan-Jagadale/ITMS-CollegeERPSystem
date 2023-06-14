import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import LeaveForm from '../../components/HOD/Faculty/Leaves/leaveForm';

const HODLeavePage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <LeaveForm />
    </>
  )
}

export default HODLeavePage;