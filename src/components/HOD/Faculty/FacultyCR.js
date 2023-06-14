import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../../SubjectTeacher/Course/studyMaterial.css"
import Studymaterials from '../../../api/SubjectTeacher/CR';

const Studymaterial = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.studymaterial.year}</td>
        <td>{props.studymaterial.name}</td>
        <td><a target="_blank" rel="noopener noreferrer" href={props.studymaterial.link}>{props.studymaterial.link}</a></td>
    </tr>
)

class StudyMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studymaterials: []
        }

        this.deleteStudymaterial = this.deleteStudymaterial.bind(this);
    }

    componentDidMount() {
        Studymaterials.get('/get-studymaterials')
            .then(res => {
                this.setState({ studymaterials: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteStudymaterial(id) {
        Studymaterials.delete('/delete-studymaterial/' +id)
            .then(res => console.log(res.data));

        this.setState({ studymaterials: this.state.studymaterials.filter(el => el._id !== id)})
    }

    studymaterialsList() {
        return this.state.studymaterials.map(currentstudymaterial => {
            return <Studymaterial studymaterial={currentstudymaterial} deleteStudymaterial={this.deleteStudymaterial} key={currentstudymaterial._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                <h3 className='fidoh3'>Faculty CR</h3>

                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Year</th>
		                    <th>Faculty Name</th>
		                    <th>Link</th>
		      
                        </tr>
                    </thead>
                    <tbody>
                        {this.studymaterialsList()}
                    </tbody>
                </table>
      
            </div>
            </div>
         );
    }
}
 
export default StudyMaterial;

