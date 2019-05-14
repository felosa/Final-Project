import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import NewPlan from '../planApi/NewPlan';


export default class GNewTravel extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.match.params)
    return (
      <div className="bigbox">
        <OneTravel travel={this.props.match.params}></OneTravel>
        <NewPlan></NewPlan>
      </div>
    )
  }
}
