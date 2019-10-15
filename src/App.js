import React from 'react';
// import logo from './logo.svg';
//  
import './App.css';
import Navigation from './navigation/navigation';

// function data(user){
//   return user.firstName + ' ' +user.lasrName;
// }

// const userData = {
//   firstName:"test",
//   lasrName:"react"
// }
// Render With Function
function Showdata(){
  return (
    
      <Navigation />


  )
  
}


// Render With Class
// without import Component
// class Showdata extends React.Component{
//   render(){
//     return <h1>Hi App {data(userData)}</h1>;
//   }
// }

// with import Component
//class Showdata extends Component{
// class Showdata extends Component{
//   render(){
//     return <h1>Hi App {data(userData)}</h1>;
//   }
// }
// Render With Variable
// const Showdata = (
//      <h1>Hi App {data(userData)}</h1>
// )

//React credte Element
// const element = React.createElement(
//   'h1',
//   {className: 'greeting asddgajdhsa',
//     dataAttr:'asdab',
//   },
//   'Hello, world!'
// );

export default Showdata;
