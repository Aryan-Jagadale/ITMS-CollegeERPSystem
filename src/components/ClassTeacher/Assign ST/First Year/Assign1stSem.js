/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
// import React from "react";
// import { Link } from "react-router-dom";
// import STData from "./STData";
// import "./AssignST.css";

import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import AssignSubjects from '../../../../api/ClassTeacher/AssignSubject';
import "../../../ClassTeacher/Assign ST/Third Year/AssignST/AssignST.css";

const GetUser = props => (
    
  <tr>
      {/* <td>{props.exercise.username}</td> */}
      <td>{props.user.post}</td>
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>
        <button onClick={() => {props.onSumbitBtn(props.user,props.sub)}} className="Assign">
          Assign
        </button>
      </td>
  </tr>
)

class AssignST extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users: []
    }
    this.onSumbitBtn = this.onSumbitBtn.bind(this);
}


componentDidMount() {
  axios.get(`http://localhost:5001/get-users/`+"ST")
  .then(res => {
    console.log("This is all users")
    console.log(res.data)
    this.setState({ users: res.data })
})
}

onSumbitBtn = async(user,sub) =>{
    const assignlist = {
      name:user.name,
      email:user.email,
      subject:sub
    }

    console.log(assignlist);
   const res = await AssignSubjects.post("/assign-subject-list",assignlist);
   console.log(res.data.msg);

  }

ghodeleavesList(sub) {
    return this.state.users.map(currentuser => {
        return <GetUser sub={sub} user={currentuser} onSumbitBtn={this.onSumbitBtn} key={currentuser._id} />
    })
}
render() { 
  return ( 
      <div className='FideologyActivities'>
      <div className="fideo">
      <Link to={'/CT/assign-2nd-sem'}><div className='add'>2nd Sem</div></Link>

      <h3 className='fidoh3'>1st Sem</h3>
      <h4 className='fidoh3'>Basic Mathematics (M1)</h4>
          <table>
              <thead className="thead-light">
                  <tr>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign</th>
                  </tr>
              </thead>
              <tbody>
                  {this.ghodeleavesList("Basic Mathematics (M1)")}
              </tbody>
          </table>
          
          <br/><br/>
          <h4 className='fidoh3'>English</h4>
          <table>
              <thead className="thead-light">
                  <tr>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign</th>
                  </tr>
              </thead>
              <tbody>
                  {this.ghodeleavesList("English")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Basic Physics</h4>
          <table>
              <thead className="thead-light">
                  <tr>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign</th>
                  </tr>
              </thead>
              <tbody>
                  {this.ghodeleavesList("Basic Physics")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Basic Chemistry</h4>
          <table>
              <thead className="thead-light">
                  <tr>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign</th>
                  </tr>
              </thead>
              <tbody>
                  {this.ghodeleavesList("Basic Chemistry")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Engineering Graphics</h4>
          <table>
              <thead className="thead-light">
                  <tr>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign</th>
                  </tr>
              </thead>
              <tbody>
                  {this.ghodeleavesList("Engineering Graphics")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Fundamentals of ICT</h4>
          <table>
              <thead className="thead-light">
                  <tr>
                  <th>Post</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign</th>
                  </tr>
              </thead>
              <tbody>
                  {this.ghodeleavesList("Fundamentals of ICT")}
              </tbody>
          </table>
      </div>
      </div>
   );
}



}

export default AssignST;
