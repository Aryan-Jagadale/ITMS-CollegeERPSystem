import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Students from "../../components/HOD/Students/StudentsList";

const FYStudentsPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Students user={"a1@gmail.com"} />
    </>
  )
}

export default FYStudentsPage;