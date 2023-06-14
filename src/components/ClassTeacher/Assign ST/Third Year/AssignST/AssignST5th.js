import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import AssignSubjects from '../../../../../api/ClassTeacher/AssignSubject';
import "./AssignST.css";

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
      <Link to={'/CT/assign-5th-sem'}><div className='add'>5th Sem</div></Link>

      <h3 className='fidoh3'>6th Sem</h3>
      <h4 className='fidoh3'>Management (MAN)</h4>
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
                  {this.ghodeleavesList("Management (MAN)")}
              </tbody>
          </table>
          
          <br/><br/>
          <h4 className='fidoh3'>Emerginig Trends in IT & Computer (ETI)</h4>
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
                  {this.ghodeleavesList("Emerginig Trends in IT & Computer (ETI)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Wireless And Mobile Network (WMN)</h4>
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
                  {this.ghodeleavesList("Wireless And Mobile Network (WMN)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Mobile Application Development (MAD)</h4>
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
                  {this.ghodeleavesList("Mobile Application Development (MAD)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Web Based Application using PHP (WBP)</h4>
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
                  {this.ghodeleavesList("Web Based Application using PHP (WBP)")}
              </tbody>
          </table>
      </div>
      </div>
   );
}



}

export default AssignST;
