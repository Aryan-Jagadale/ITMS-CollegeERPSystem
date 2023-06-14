import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import Ghodeleaves from '../../../api/SubjectTeacher/Ghodeleave';

const Ghodeleave = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.ghodeleave.date}</td>
        <td>{props.ghodeleave.fname}</td>
        <td>{props.ghodeleave.lname}</td>
        <td>{props.ghodeleave.designation}</td>
        <td>{props.ghodeleave.NoDays}</td>
        <td>{props.ghodeleave.TypeDays}</td>
        <td>{props.ghodeleave.email}</td>
        <td>{props.ghodeleave.response}</td>
    
        <td>
            <span onClick={() => {props.deleteGhodeleave(props.ghodeleave._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class leaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ghodeleaves: []
        }

        this.deleteGhodeleave = this.deleteGhodeleave.bind(this);
    }

    componentDidMount() {
        Ghodeleaves.get('/get-ghodeleaves/'+this.props.user.email)
            .then(res => {
                this.setState({ ghodeleaves: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteGhodeleave(id) {
        Ghodeleaves.delete('/delete-ghodeleave/' +id)
            .then(res => console.log(res.data));

        this.setState({ ghodeleaves: this.state.ghodeleaves.filter(el => el._id !== id)})
    }

    ghodeleavesList() {
        return this.state.ghodeleaves.map(currentghodeleave => {
            return <Ghodeleave ghodeleave={currentghodeleave} deleteGhodeleave={this.deleteGhodeleave} key={currentghodeleave._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
            <h3 className='fidoh3'>Leaves</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>First Name</th>
                            <th>Last Name</th>
                            <th>Designation</th>
                            <th>No Of Days</th>
		                    <th>Type Of Days</th>
                            <th>Email</th>
                            <th>Response</th>
		                    <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ghodeleavesList()}
                    </tbody>
                </table>
                <Link to={'/ST/add-leave'}><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default leaveForm;