import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Facultys from '../../components/ClassTeacher/Faculty/Facultys';

const HODFacultyPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Facultys />
    </>
  )
}

export default HODFacultyPage;