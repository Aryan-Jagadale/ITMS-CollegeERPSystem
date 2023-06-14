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
      <Link to={'/CT/assign-3rd-sem'}><div className='add'>3rd Sem</div></Link>

      <h3 className='fidoh3'>4th Sem</h3>
      <h4 className='fidoh3'>Java Programming (JRP)</h4>
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
                  {this.ghodeleavesList("Java Programming (JRP)")}
              </tbody>
          </table>
          
          <br/><br/>
          <h4 className='fidoh3'>Software Engineering (SEN)</h4>
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
                  {this.ghodeleavesList("Software Engineering (SEN)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Database Management (DBMS)</h4>
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
                  {this.ghodeleavesList("Database Management (DBMS)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>GUI using VB.Net (GAD)</h4>
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
                  {this.ghodeleavesList("GUI using VB.Net (GAD)")}
              </tbody>
          </table>

          <br/><br/>
          <h4 className='fidoh3'>Computer Network (CNE)</h4>
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
                  {this.ghodeleavesList("Computer Network (CNE)")}
              </tbody>
          </table>

      </div>
      </div>
   );
}



}

export default AssignST;
