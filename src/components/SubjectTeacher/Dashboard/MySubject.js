import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import "./MySubject.css";

import AssignSubject from '../../../api/ClassTeacher/AssignSubject';


const Exercise = props => (
          <div className="sub1">
            <p className="subname">{props.exercise.subject}</p>
          </div>
)

class Subject extends Component {

  constructor(props) {
    super(props);
    this.state = {
        exercises: []
    }
    console.log(props.user)
}


componentDidMount() {
  console.log(this.props.user.email)
    AssignSubject.get('/get-assign-subjects/'+this.props.user.email)
        .then(res => {
            console.log(res.data);
            this.setState({ exercises: res.data })
        })
        .catch(error => console.log(error));
}


exercisesList() {
    return this.state.exercises.map(currentexercise => {
        return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
    })
}
  render (){
    return (

        <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-left" id="row">
        {this.exercisesList()}
        </div>

  );
    }
}

export default Subject;