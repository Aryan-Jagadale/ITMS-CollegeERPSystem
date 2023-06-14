import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Students from "../../components/HOD/Students/StudentsList";

const TYStudentsPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Students user={"pg@gmail.com"} />
    </>
  )
}

export default TYStudentsPage;