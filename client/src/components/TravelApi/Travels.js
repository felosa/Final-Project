import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TravelService from './TravelService';


export default class Travels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      travel: {
        name: "",
        city: "",
        country: "",
        description:"",
        imgPath: "",
        author: "",
        plans: "",
        redirect: false,
      },      
      travels:[]
    };

    this.service = new TravelService();
  }
  

  render() {
    return this.props.loggedInUser && (
      <div className="container">
        <p>Lista de travels de <span>{this.props.loggedInUser.username}</span></p>
        <Link to="/newtravel"><button>New Travel</button></Link>
{
 this.props.loggedInUser.travels ?
 <div>{this.props.loggedInUser.travels.map((travel)=>{
   return (
   <div>
     <img alt="" src={travel.imageUrl}/>
     <Link actualtravel={travel} to={`/travel/${travel._id}`}><p>{travel.name}</p></Link>
     <p>Country: {travel.country}</p> 
    </div>
   )
 })}</div> 

 :
<span>No hay viajes</span>
}
       
      </div>
    )
  }
}
