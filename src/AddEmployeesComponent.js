import React, { Component } from 'react';
import './css/style.css';
import './css/input.css';
class AddEmployeesComponent extends Component {
    constructor() {
        super();
        this.state = {isShowAddEmployee: false};
  }
    showAddEmployee(event) {
        event.preventDefault(); // stopping the natural  behaviour of submission stop page refresh
        this.setState({
            isShowAddEmployee: !this.state.isShowAddEmployee
        });
    }
    render() {
        console.log(this.state.isShowAddEmployee);
        let addEmployee = this.state.isShowAddEmployee ? (
            <form onSubmit={this.props.addIssue}>
                <label htmlFor="Id">Employee Id: </label>
                <input type="text" name="empId" id="empId" placeholder="Your Id" />  
                {/*value={this.props.currentEmpData.id} onChange={this.props.updateEmployee.id}*/}

                <label htmlFor="empName">Employee Name</label>
                <input type="text" name="empName" id="empName" placeholder="Your Name" />
                {/*value={this.props.currentEmpData.name} onChange={this.props.updateEmployee.name}*/}

                <label htmlFor="empCompany">Employee Company</label>
                <input type="text" name="empCompany" id="empCompany" placeholder="Your Company"/>
                {/*value={this.props.currentEmpData.Company } onChange={this.props.updateEmployee.Company}*/}

                <input type="Submit" value="Submit" />
            </form>
        ) : '';
        return (
            <form>   
                <button onClick={(e)=> this.showAddEmployee(e)} className="button" >Add New Employee</button>
                {addEmployee}
            </form>
        );
    }
}
export default AddEmployeesComponent ;