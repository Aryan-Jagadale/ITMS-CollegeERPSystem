import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ExercisesList.css';
import Exercises from '../../../api/SubjectTeacher/Exercise';

const Exercise = props => (
    <tr>
        <td>{props.exercise.date}</td>
        <td>{props.exercise.activity}</td>
        <td>{props.exercise.subject}</td>
        <td>{props.exercise.group}</td>
        <td>
            <Link to={"/ST/edit-fideology/edit/"+props.exercise._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteExercise(props.exercise._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }
        console.log(props.user)
        this.deleteExercise = this.deleteExercise.bind(this);
    }
    

    componentDidMount() {
        Exercises.get('/get-exercises/'+this.props.user.email)
            .then(res => {
                console.log(res.data);
                this.setState({ exercises: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteExercise(id) {
        Exercises.delete('/delete-exercise/' +id)
            .then(res => console.log(res.data));

        this.setState({ exercises: this.state.exercises.filter(el => el._id !== id)})
    }

    exercisesList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                <h3 className='fidoh3'>Pedelogy Activities</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>Activity Name</th>
		                    <th>Subject</th>
                            <th>Group No</th>
		                    <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
                <Link to={'/ST/create-fideology'}><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default ExercisesList;

