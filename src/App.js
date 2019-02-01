import React, { Component } from 'react';
import EmployeeStatefullComponent from './EmployeeStatefullComponent';
import AddEmployeesComponent from './AddEmployeesComponent';
import Home from './Home';
import AboutUs from './AboutUs';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
class App extends Component {
  render() {
    let menus = [
      { label: 'Home', menu: '/', active: true },
      // { label: 'Home', menu: '/'},
      { label: 'Employee', menu: '/employee' },
      { label: 'Add Employees', menu: '/addEmployee' },
      { label: 'About', menu: '/about' },
    ];
    return (
      <Router>
        <div className="base">
          <header>
            <Header menus={menus} />
            {/*<Route path="/" component={() => (<Header menus={menus} />)}/>*/}
          </header>
          <div className="container">
            <Switch>
            <Route exact path={'/'} component={Home} />            
            <Route exact path={'/employee'} component={EmployeeStatefullComponent} />
            <Route exact path={'/addEmployee'} component={AddEmployeesComponent} />
            <Route exact path={'/about'} component={AboutUs} />

            {/*<Route exact path={'/'} component={() => (<Home  active="true" />)} />
            <Route exact path={'/employee'} component={() => (<EmployeeStatefullComponent  active="true" />)} />*/}
            </Switch>
          </div>
          <footer>
           <Footer />
        </footer>

        </div>
      </Router>
    );
  }
}

export default App;
