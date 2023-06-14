import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
//import './ExercisesList.css';
import "../../../components/ClassTeacher/Students/students.css";

import Studentlists from '../../../api/ClassTeacher/Studentlist';

function CheckYr(user){
    if(user == "a1@gmail.com"){
        return "First ";
    }else if(user == "pf@gmail.com"){
        return "Second ";
    }else{
        return "Third ";
    }
}
const Studentlist = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.studentlist.date}</td>
        <td>{props.studentlist.description}</td>
        <td><a href={props.studentlist.link}>{props.studentlist.link}</a></td>
        
        {/* <td> */}
            {/* <Link to={"/CT/studentlist/edit/"+props.studentlist._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteStudentlist(props.studentlist._id) }} ><i className='bx bx-trash'></i></span> */}
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        {/* </td> */}
    </tr>
)

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentlists: []
        }

        this.deleteStudentlist = this.deleteStudentlist.bind(this);
    }

    componentDidMount() {
        Studentlists.get('/get-studentlists/'+this.props.user)
            .then(res => {
                this.setState({ studentlists: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteStudentlist(id) {
        Studentlists.delete('/delete-studentlist/' +id)
            .then(res => console.log(res.data));

        this.setState({ studentlists: this.state.studentlists.filter(el => el._id !== id)})
    }

    studentlistsList() {
        return this.state.studentlists.map(currentstudentlist => {
            return <Studentlist studentlist={currentstudentlist} deleteStudentlist={this.deleteStudentlist} key={currentstudentlist._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
            <h3 className='fidoh3'>{CheckYr(this.props.user)} Year Students</h3>
                <table className='student-list'>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>Year</th>
		                    <th>Link</th>
		                    {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.studentlistsList()}
                    </tbody>
                </table>
                {/* <Link to={'/CT/add-student-list'}><div className='add'>Add</div></Link> */}
            </div>
            </div>
         );
    }
}
 
export default StudentList;

