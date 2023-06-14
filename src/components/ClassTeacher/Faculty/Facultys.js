import React from "react";
import "./Facultys.css";
import FacultyDatass from "./FacultysData";
import SupportingFacultyData from "./SupportingFacultyData";

function Facultys(props) {
  return (
    <>
      <div className="facultysList">
        <div className="fideo">
          <h3 className="fidoh3">Faculty List</h3>

          <table>
            <tr>
              <th>Sr no.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Qualification</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>More info</th>
            </tr>

            {FacultyDatass.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.SrNo}</td>
                  <td>
                    {" "}
                    <img
                      className="facultyImg"
                      alt="faculty img"
                      src={item.Image}
                    />{" "}
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.Gender}</td>
                  <td>{item.Qualification}</td>
                  <td>{item.Mobile}</td>
                  <td>{item.Email}</td>
                  <td>
                    <a href={item.MoreInfo}>
                      <i class="bx bxs-file-doc"></i>
                    </a>{" "}
                  </td>
                </tr>
              );
            })}
          </table>

          <h3 className="fidoh4">Supporting Faculty</h3>

          <table>
            <tr>
              <th>Sr no.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Qualification</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>More info</th>
            </tr>

            {SupportingFacultyData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.SrNo}</td>
                  <td>
                    <img
                      className="facultyImg"
                      src={item.Image}
                    />{" "}
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.Gender}</td>
                  <td>{item.Qualification}</td>
                  <td>{item.Mobile}</td>
                  <td>{item.Email}</td>
                  <td>
                    <a href={item.MoreInfo}>
                      <i class="bx bxs-file-doc"></i>
                    </a>{" "}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default Facultys;
