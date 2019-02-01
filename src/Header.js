import React from 'react';
import ReactEmployeeMenu from './ReactEmployeeMenu';
import './css/style.css';

export const Header = (props) => (
    <div className="header">            
        <ReactEmployeeMenu menusList={props.menus} />            
        <div className="bodyPage">
            {props.children}
        </div>
    </div>
);
