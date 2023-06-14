import React, { Component } from 'react'
import './Weathercomponents.css'

export class Weathercomponents extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cityname:'',
    }
  }
  citynameHandler = event => {
    this.setState(
      {
        cityname:event.target.value
      }
    )
  }
  formSubmitHandler=event=>{
    event.preventDefault()
    console.log(
      this.state.cityname
    );
    fetch(`http://localhost:3500/api/v1/weather`,
    {
      method : `GET`,
      crossDomain : true,
      headers: {
        'content-type' : 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body : JSON.stringify({
      cityname:this.state.cityname,
    
      })
    })
  }

  render() {
    const{cityname}=this.state
    return (
    <div>
      <h1>WEATHER DISPLAY</h1>
      <h3>LET'S CHECK TODAY'S TEMPERATURE</h3>
      <form className='weather-display-form' onSubmit={this.formSubmitHandler}>
      <div className="weather-group">
      <label>City Name</label>
          <input type='text' className='accept-form'
          placeholder='Enter your City Name here' 
          required
          value={cityname}
          onChange={this.citynameHandler}
          />
          </div>
          </form>
          <button type="submit">SUBMIT</button>
          </div>
          
        
    )
  }
};

export default Weathercomponents