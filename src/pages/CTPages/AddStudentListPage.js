import React from 'react'
import CTNavbar from "../../components/ClassTeacher/classTeacherNavbar";
import AddStudentList from '../../components/ClassTeacher/Students/addStudentList';

const AddStudentListPage = ({user, updateUser}) => {
  return (
    <>
        <CTNavbar user={user} updateUser={updateUser}/>
        <AddStudentList user={user} />
    </>
  )
}

export default AddStudentListPage;