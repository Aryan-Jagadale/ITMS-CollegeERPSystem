import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Detention from "../../components/HOD/Detention/DetentionList";

const TYDetentionPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Detention user={"pg@gmail.com"} />
    </>
  )
}

export default TYDetentionPage;