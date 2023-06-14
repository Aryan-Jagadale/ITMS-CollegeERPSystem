import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Students from "../../components/HOD/Students/StudentsList";

const SYStudentsPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Students user={"pf@gmail.com"} />
    </>
  )
}

export default SYStudentsPage;