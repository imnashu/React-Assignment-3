import React from 'react'

export default function Header(props) {
    return (
        <div className='header common'>
            <i className="fa fa-angle-left" ></i>
            <div className='case'>
                <h3>{props.Employee[0].name}</h3>
                <p>{props.Employee[0].EmployeeID}</p>
            </div>
            <button type='button'>print</button>
        </div>
    )
}
