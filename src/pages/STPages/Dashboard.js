import React from 'react'
import STNavbar from "../../components/SubjectTeacher/STNavbar";
import MySubject from "../../components/SubjectTeacher/Dashboard/MySubject";
import ExercisesList from '../../components/SubjectTeacher/Dashboard/ExercisesList';

const Dashbord = ({user, updateUser}) => {
  return (
    <>
        <STNavbar user={user} updateUser={updateUser}/>
        <MySubject user={user} />
        <ExercisesList user={user}/>
    </>
  )
}

export default Dashbord;