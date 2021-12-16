import React from 'react'

export default function MainBody(props) {
    return (
        <div>
            <div className='c-info'>
                <h3>Appointment :<span>{props.Employee[0].Appointment}</span></h3>
                <h3>Email :<span>{props.Employee[0].Email}</span></h3>
                <h3>Phone :<span>{props.Employee[0].phno}</span></h3>
            </div>
            <div className='o-info common'>
                <div className='li'>
                    <h3>Status</h3>
                    <ul><li>in progress</li></ul>
                </div>
                <div>
                    <h3>Door</h3>
                    <p>Mark</p>
                </div>
                <div>
                    <h3>Time</h3>
                    <p>{props.Employee[0].Appointment}</p>
                </div>
            </div>
            <div className='p-list common'>
                <div className='rect'><i class="fa fa-square-o" aria-hidden="true"></i></div>
                <div className='person'>
                    <div className='img'>
                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Error' />
                    </div>
                    <div className='info'><h3>{props.Employee[0].name}</h3><p>Transit on the way!</p></div>
                </div>
                <div ><i className="fa fa-angle-right" ></i></div>
            </div>
        </div>
    )
}
