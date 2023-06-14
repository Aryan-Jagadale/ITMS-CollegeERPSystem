import React from 'react';
import STNavbar from '../../components/SubjectTeacher/STNavbar';
import Students from "../../components/HOD/Students/StudentsList";

const StudentsDetails = ({user, updateUser}) => {
    return (
        <div>
            <STNavbar user={user} updateUser={updateUser} />
            <Students user={"a1@gmail.com"} />
        </div>
    );
}

export default StudentsDetails;