import React from 'react';
import './images/search-icon.png';
import './css/ReactEmployeeCss.css';
import './images/logo.jpg';
import { Link } from 'react-router-dom';

class ReactEmployeeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    }
     _handleClick(menu) { 
    this.setState({ menu: menu });
  }
    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        ) : '';


        let MenuList = this.props.menusList.map((menu, index) => {
        //     console.log("########### status :"+menu.active);
        //    let subMenuList = menu.active ? (
        //         <Link className="menu__link menu__link--active" to={menu.menu}>{menu.label}</Link>
        //    ) : (
        //            <Link className="menu__link menu__link" to={menu.menu}>{menu.label}</Link>
        //        );
            return (
                <li key={index} className="menu__list-item"  >
                    {/*{subMenuList}*/}
                    <Link 
                    className={this.state.menu === menu ? "menu__link menu__link--active" : "menu__link menu__link"}
                     onClick={this._handleClick.bind(this, menu)} to={menu.menu}>{menu.label}
                   
                     </Link>
                </li>
            )
        });

        return (
            <nav className="menu">
                <h1 className="menu__logo">React Emp.</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {MenuList}
                    </ul>

                    <button onClick={this.showForm.bind(this)} className="menu__search-button"></button>

                    {searchForm}

                </div>
            </nav>
        );
    }
}
export default ReactEmployeeMenu;