import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Achievements from "../../components/HOD/Dashboard/StudentAchievementsHOD";
import SYAchievement from '../../components/HOD/Dashboard/SecondYear/StudentAchievementsHOD';
import TYAchievement from "../../components/HOD/Dashboard/ThirdYear/StudentAchievementsHOD";
import TopperList from "../../components/HOD/Dashboard/TopperList";

const Dashbord = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <h3 className='fidoh3'>Student Achievements</h3>
        <Achievements />
        <SYAchievement />
        <TYAchievement />
        <TopperList />
    </>
  )
}

export default Dashbord;