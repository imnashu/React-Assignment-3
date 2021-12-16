import React from 'react';
import './App.css';
import Header from './Componenets/Header';
import MainBody from './Componenets/MainBody';


var arrow = "<"
function App() {
  var Employee = [
    {
      EmployeeID : "000123" ,
      Appointment : "6:00 (16/12/2021)",
      Email : "thelosthuman@gmail.com",
      phno : "8861817682",
      status:'In Progress',
      Door:'Mark',
      time:'10:30 (25-05-2016)',
      profilepicture: 'https://www.w3schools.com/howto/img_avatar.png',
      name:"john Doe",
      designation:"lorem ipsum"
    }
  ]
  // console.log(Employee[0].name)
  return (
    <div className="site-container">
      <Header Employee={Employee}/>
      <MainBody Employee={Employee}/>
    </div>
  );
}

export default App;
