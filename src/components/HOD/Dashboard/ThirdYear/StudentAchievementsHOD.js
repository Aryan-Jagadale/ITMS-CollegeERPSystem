import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import Achievements from '../../../../api/ClassTeacher/Achievement';


// function ChangeFClass(){
//     window.location.href = "/HOD/Dashboard";
// }

// function ChangeSClass(){
//     window.location.href = "/HOD/Dashboard/SY-Achievements";
// }

// function ChangeTClass(){
//     window.location.href = "/HOD/Dashboard/TY-Achievements";
// }

const Achievement = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.achievement.sname}</td>
        <td>{props.achievement.dept}</td>
        <td>{props.achievement.institute}</td>
        <td>{props.achievement.ename}</td>
        <td>{props.achievement.date}</td>
        
       
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
        Achievements.get('/get-achievements/'+"pg@gmail.com")
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
            {/* <div className='sy-btn sy' onClick={ChangeFClass}>FY</div>
            <div className='sy-btn fy' onClick={ChangeSClass}>SY</div>
            <div className='sy-btn' onClick={ChangeTClass}>TY</div> */}
           
            <div className="fideo">
        
                <h3 className='fidoh3'>TY Student Achievements</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Student Name</th>
		                    <th>Department</th>
		                    <th>Institute</th>
                        <th>Event Name</th>
		                    <th>Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.achievementsList()}
                    </tbody>
                </table>
                
            </div>
            </div>
         );
    }
}
 
export default studentAchievement;





// const Achievement = props => (
//     <tr>
//         {/* <td>{props.exercise.username}</td> */}
//         <td>{props.achievement.date.substring(0,10)}</td>
//         <td>{props.achievement.activity}</td>
//         <td>{props.achievement.subject}</td>
//         <td>{props.achievement.group}</td>
        
//         <td>
//             <Link to={"/edit/"+props.achievement._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteAchievement(props.achievement._id) }} ><i class='bx bx-trash'></i></span>
//             {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
//         </td>
//     </tr>
// )

// class studentAchievement extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             achievements: []
//         }

//         this.deleteAchievement = this.deleteAchievement.bind(this);
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/achievements/')
//             .then(res => {
//                 this.setState({ achievements: res.data })
//             })
//             .catch(error => console.log(error));
//     }

//     deleteAchievement(id) {
//         console.log(id)
//         axios.delete("http://localhost:5000/achievements/" +id)
//             .then(res => console.log(res.data));

//         this.setState({ achievements: this.state.achievements.filter(el => el._id !== id)})
//     }

//     achievementsList() {
//         return this.state.achievements.map(currentachievement => {
//             return <Achievement achievement={currentachievement} deleteAchievement={this.deleteAchievement} key={currentachievement._id} />
//         })
//     }

//     render() { 
//         return ( 
//             <div className='FideologyActivities'>
//             <div className="fideo">
//                 <h3 className='fidoh3'>Pedelogy Activities</h3>
//                 <table>
//                     <thead className="thead-light">
//                         <tr>
// 		                    <th>Date</th>
// 		                    <th>Activity Name</th>
// 		                    <th>Subject</th>
//                             <th>Group No</th>
// 		                    <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.achievementsList()}
//                     </tbody>
//                 </table>
//                 <Link to={'/add-achievement'}><div className='add'>Add</div></Link>
//             </div>
//             </div>
//          );
//     }
// }
 
// export default studentAchievement;

