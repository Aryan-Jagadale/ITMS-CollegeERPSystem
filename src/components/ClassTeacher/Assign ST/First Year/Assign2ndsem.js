import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import AssignSubjects from '../../../../api/ClassTeacher/AssignSubject';
import "../../../ClassTeacher/Assign ST/Third Year/AssignST/AssignST.css";

const GetUser = props => (
    
  <tr>
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
      <Link to={'/CT/assign-1st-sem'}><div className='add'>1st Sem</div></Link>

      <h3 className='fidoh3'>2nd Sem</h3>
      <h4 className='fidoh3'>Applied Mathematics (M2)</h4>
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
                  {this.ghodeleavesList("Applied Mathematics (M2)")}
              </tbody>
          </table>
          
          <br/><br/>
          <h4 className='fidoh3'>Basic Electronics (BEC)</h4>
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
                  {this.ghodeleavesList("Basic Electronics (BEC)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Business Communication using Computers (BCC)</h4>
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
                  {this.ghodeleavesList("Business Communication using Computers (BCC)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Elements of Electrical Engineering (EEC)</h4>
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
                  {this.ghodeleavesList("Elements of Electrical Engineering (EEC)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Programming in C (PRC)</h4>
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
                  {this.ghodeleavesList("Programming in C (PRC)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Computer Peripheral and Hardware Maintenance (CPH)</h4>
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
                  {this.ghodeleavesList("Computer Peripheral and Hardware Maintenance (CPH)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Web Page Application using HTML (WPD)</h4>
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
                  {this.ghodeleavesList("Web Page Application using HTML (WPD)")}
              </tbody>
          </table>
      </div>
      </div>
   );
}



}

export default AssignST;
