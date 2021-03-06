import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import "./Signup.css";




class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: "",
        lang: "",
        country: "",
        description:"",
        genre: "",
        year: "",
        imageUrl: "",
        redirect: false,      
    };

    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {username, password, imageUrl, lang, country, description, genre,year} = this.state
    console.log(username, password)

    

    // , lang, country, description, genre,year
    this.service.signup(username, password, imageUrl, lang, country, description, genre,year)
    .then( () => {
      console.log(username)
        this.setState({
            username: "", 
            password: "",
            lang: "",
            country: "",
            description: "",
            genre: "",
            imageUrl:"",
            year: "",
            redirect: true
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }


  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    this.service.handleUpload(uploadData)
    .then(response => {
      // console.log('response is: ', response);
      // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
}
 
  handleChange = event => {
    const { name, value } = event.target;
 
    this.setState({  ...this.state, [name]: value });
    
  };

  render(){
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }
    
    return(
      <div className="container">
      <div className="formStyle formSignup whiteLetter">
        <form onSubmit={this.handleFormSubmit} className="form">
          
          <h2>Signup now</h2>
          <label>Username:</label>
          <br></br>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Password:  </label>
          <br></br>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <br></br>
          <label>Country of origin:</label>
          <br></br>
          <input type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)} />
          <br></br>
          <label>Personal Description:</label>
          <br></br>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <br></br>
          <br></br>
          <label>Upload your photo:</label>
          <input 
            type="file" 
            onChange={(e) => this.handleFileUpload(e)} />
          <br></br>
          <input type="submit" value="Signup" />
        </form>
        </div>
      </div>
    )
  }
}

export default Signup;