import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './studentAchievement.css';

import Achievements from '../../../api/ClassTeacher/Achievement';


const Achievement = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.achievement.sname}</td>
        <td>{props.achievement.dept}</td>
        <td>{props.achievement.institute}</td>
        <td>{props.achievement.ename}</td>
        <td>{props.achievement.date}</td>
        
        <td>
            <Link to={"/CT/student-achievement/edit/"+props.achievement._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteAchievement(props.achievement._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class studentAchievement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: []
        }

        this.deleteAchievement = this.deleteAchievement.bind(this);
    }

    componentDidMount() {
        Achievements.get('/get-achievements/'+this.props.user.email)
            .then(res => {
                this.setState({ achievements: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteAchievement(id) {
        Achievements.delete('/delete-achievement/' +id)
            .then(res => console.log(res.data));

        this.setState({ achievements: this.state.achievements.filter(el => el._id !== id)})
    }

    achievementsList() {
        return this.state.achievements.map(currentachievement => {
            return <Achievement achievement={currentachievement} deleteAchievement={this.deleteAchievement} key={currentachievement._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                <h3 className='fidoh3'>Student Achievements</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Student Name</th>
		                    <th>Department</th>
		                    <th>Institute</th>
                            <th>Event Name</th>
		                    <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.achievementsList()}
                    </tbody>
                </table>
                <Link to='/CT/add-achievement'><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default studentAchievement;