import React, { Component } from 'react';
import './css/style.css';
import AddEmployeesComponent from './AddEmployeesComponent';
import EmployeeStatelessComponent from './EmployeeStatelessComponent';

class EmployeeStatefullComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empData: [{
                id: "1",
                userName: "Isha",
                Company: "Yash Tech"
            },
            {
                id: "2",
                userName: "Dharmendra",
                Company: "Yash Tech"
            },
            {
                id: "3",
                userName: "Charu",
                Company: "JD"
            }],
            currentEmpData:''            
            
        }
    }
    
    //  addEmployee = (event) => {
    //     event.preventDefault(); // stopping the natural  behaviour of submission stop page refresh
    //       const {
    //         empData,
    //         currentEmpData
    //     } = this.state;
    //     empData.push({
    //         id: currentEmpData.id,
    //         name:currentEmpData.name,
    //         Company: currentEmpData.Company
    //     });
    //     this.setState({
    //         empData: empData,// constructor variable : local variable of addIssue
    //         currentEmpData: ''
    //     })
    // }
    //  updateEmployee = (newValue) => {
    //       this.setState({ currentEmpData: newValue.target.value });
    //  }
    //  changeData(index) {
    //       const {
    //         empData,
    //     } = this.state;
    //     this.setState({
    //         empData
    //     });
    // }
    render() {
        return (
            <div id="emp-list">
                <table className="table"> 
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Company</th>
                        </tr>
                        {this.state.empData.map(function (emp) {
                            return <EmployeeStatelessComponent key={emp.id} empDataList={emp} />;
                        })}
                    </tbody>
                </table>
                <AddEmployeesComponent />
            </div>
        );
    }
}
export default EmployeeStatefullComponent;