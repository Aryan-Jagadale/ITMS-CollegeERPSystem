import React from 'react';
import './studentTable.css';

function studentTable(){
    return (
        <section className="fy_section">
        <table className="ctTable">
        <tbody>
        <tr>
          <th>Sr no.</th>
          <th>Year</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>2021</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>2.</td>
          <td>2020</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>3.</td>
          <td>2019</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        </tbody>
      </table>
    </section>
  
    );
}

export default studentTable;