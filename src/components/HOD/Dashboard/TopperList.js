import React from "react";
import "./StudentAchievementsHOD.css";

function TopperList() {
  return (
    <>
      <div className="TopperList">
        <div className="fideo">
          <h3 className="fidoh3">Students Topper List</h3>
          <table>
            <tr>
              <th>Sr no.</th>
              <th>Student Name</th>
              <th>Percentage</th>
              <th>Academic Year</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Avadhut S. Shedage</td>
              <td>97.90</td>
              <td>2021 - 22</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Pranav K. Shelke </td>
              <td>94.20</td>
              <td>2020 - 21</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Sangam A. Gorde</td>
              <td>95.55</td>
              <td>2019 - 20</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Akash S. Gadge</td>
              <td>93.88</td>
              <td>2018 - 19</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default TopperList;
