import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./Config"
import FbButton from "./Components/FB_button"
import LogoutButton from "./Components/Logout_button"
import BasicInfo from "./Components/BasicInfo"
import ProfilePics from "./Components/ProfilePics";
import BaveragesnTime from "./Components/baveragesAndTime";


var provider = new firebase.auth.FacebookAuthProvider();


class App extends Component {
  constructor() {
    super();

    this.state = {
      step:1,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.saveBasicInfo = this.saveBasicInfo.bind(this);
    this.saveProfilePics = this.saveProfilePics.bind(this);
  }

  login() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
    }).catch(function(error) {
      var errorMessage = error.message;
    });
  }

  logout() {
    firebase.auth().signOut().then(function() {
      console.log("Sign-out successful");
    }).catch(function(error) {
    });
  }

  saveBasicInfo(userName, phNumber) {
    const {step} = this.state;
    this.setState({ step:step+1, userName, phNumber});
  }
  saveProfilePics(images) {
    images.map( (value,index) => {
      const timestamp = Number(new Date());
      const storageRef = firebase.storage().ref(timestamp.toString()+value.name);
      storageRef.put(value)
      .then( snapshot => snapshot.ref.getDownloadURL())
      .then( url => console.log(url))

    })
  }
  


  render() {
    const {step} = this.state;
    return (
      <div className="App">
        <FbButton login={this.login} />
        <LogoutButton logout={this.logout} />
        <div className="registration">
          {/* {step===1 && <BasicInfo saveBasicInfo={this.saveBasicInfo} />} */}
          {/* {step===1 && <ProfilePics saveProfilePics={this.saveProfilePics} />} */}
          {step===1 && <BaveragesnTime />}

        </div>


      </div>
    );
  }
}

export default App;
