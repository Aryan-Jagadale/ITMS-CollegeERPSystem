import React from 'react'
import HODNavbar from "../../components/HOD/HODNavbar";
import Detention from "../../components/HOD/Detention/DetentionList";

const SYDetentionPage = ({user, updateUser}) => {
  return (
    <>
        <HODNavbar user={user} updateUser={updateUser}/>
        <Detention user={"pf@gmail.com"} />
    </>
  )
}

export default SYDetentionPage;