import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Feedback.css";

import Feedbacklists from '../../../api/ClassTeacher/Feedbacklist';

const Feedbacklist = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.feedbacklist.year}</td>
        <td>{props.feedbacklist.faculty}</td>
        <td><a href={props.feedbacklist.link}>{props.feedbacklist.link}</a></td>
        
        <td>
            <Link to={"/CT/edit-feedback/edit/"+props.feedbacklist._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteFeedbacklist(props.feedbacklist._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class FeedbackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          feedbacklists: []
        }

        this.deleteFeedbacklist = this.deleteFeedbacklist.bind(this);
    }

    componentDidMount() {
      Feedbacklists.get('/get-feedbacklists/'+this.props.user.email)
            .then(res => {
                this.setState({ feedbacklists: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteFeedbacklist(id) {
      Feedbacklists.delete('/delete-feedbacklist/' +id)
            .then(res => console.log(res.data));

        this.setState({ feedbacklists: this.state.feedbacklists.filter(el => el._id !== id)})
    }

    feedbacklistsList() {
        return this.state.feedbacklists.map(currentfeedbacklist => {
            return <Feedbacklist feedbacklist={currentfeedbacklist} deleteFeedbacklist={this.deleteFeedbacklist} key={currentfeedbacklist._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
            <h3 className='fidoh3'>Third Year Faculty Feedback</h3>
                <table className='detention-table'>
                    <thead className="thead-light">
                        <tr>
		                    <th>Year</th>
		                    <th>Faculty Name</th>
		                    <th>Link</th>
		                    <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.feedbacklistsList()}
                    </tbody>
                </table>
                <Link to={'/CT/add-feedback'}><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default FeedbackList;

