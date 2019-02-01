import React from 'react';
import './css/style.css';
const EmployeeStatelessComponent = ({empDataList={}}) => {    
        return (                
        <tr className="tr">
             <td className="td">{empDataList.id}</td>
             <td className="td">{empDataList.userName}</td>
             <td className="td">{empDataList.Company}</td>
        </tr>)
    
}
export default EmployeeStatelessComponent;