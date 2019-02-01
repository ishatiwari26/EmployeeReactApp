import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
import EmployeeStatelessComponent from './EmployeeStatelessComponent';
class MenuComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                 <div className="container center">


                </div>
            </BrowserRouter>
        );
    }
}

export default MenuComponent;
