import React, { Component } from 'react';
import ReactEmployeeMenu from './ReactEmployeeMenu';
import EmployeeStatefullComponent from './EmployeeStatefullComponent';
import AddEmployeesComponent from './AddEmployeesComponent';
class MainComponent extends Component {
  render() {
    let menus = [
      { label: 'Home', menu: '#home', active: true },
      { label: 'Employee', menu: '#employee' },
      { label: 'Dashboard', menu: '#dashboard' },
      { label: 'About', menu: '#about' },
      { label: 'Contact Us', menu: '#contact-us' },

    ];
    return (
      <div className="container center">

        <ReactEmployeeMenu menus={menus} />

        <div className="table locate">
          <EmployeeStatefullComponent />
        </div>

        <div className="empAdd">
          <AddEmployeesComponent />
        </div>


      </div >
    );
  }
}

export default MainComponent;
