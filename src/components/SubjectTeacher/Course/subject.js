import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import './subject.css';

import AssignSubject from '../../../api/ClassTeacher/AssignSubject';


const Exercise = props => (

      <div>
         <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">
         <label className="s1">{props.exercise.subject}</label>
    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1zNtAoh5Snmknl_BJMtHus_W67Q7wlynO/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'><div className="attendance">
      <span className="attend_label">Attendance</span>
    </div></a>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut" variant="success" id="dropdown-basic">
          <span className='attend_label1'> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1u1P7pr_P3elAirFvRV9Xj8ibRGVMgfU3?usp=share_link">Question Paper</Dropdown.Item>
          <Dropdown.Item target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1u1P7pr_P3elAirFvRV9Xj8ibRGVMgfU3?usp=share_link">Answer Key</Dropdown.Item>
          {/* <Dropdown.Item rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'>DS Format</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1jjEafYdRWuNKR082DzqaEKx-1o369ZXG/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'><div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div></a>

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1-tBZRwvPNJSp3eT7pITvmyC0Lp-dTzT7/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true'><div className="term_work">
      <span className="attend_label">Term Work</span>
    </div></a>

      <Dropdown>
        <Dropdown.Toggle className="learn " variant="success" id="dropdown-basic">
        <span className="learn_label">Learning Materials</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/13GXZyz72UwBPReyy0SG8d34aVPEtPeCf/edit?usp=sharing&ouid=100148969996896430193&rtpof=true&sd=true">Assignments</Dropdown.Item>
          <Dropdown.Item href="/ST/study-material">Study Materials</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
  </div>
  </div>
  </div>
      {/* <br/><br/><br/><br/> */}
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
       <>
        {this.exercisesList()}
      </>
  );
    }
}

export default Subject;