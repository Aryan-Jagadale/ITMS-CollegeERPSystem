import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Detention from "../../components/HOD/Detention/DetentionList";

const FYDetentionPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Detention user={"a1@gmail.com"} />
    </>
  )
}

export default FYDetentionPage;