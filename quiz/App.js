import React, { Component } from "react";
import QuizList from "./screens/QuizList/QuizList";
import QuizInfo from "./screens/QuizInfo/QuizInfo";
import Container from "./components/Container";
import LoginForm from "./screens/Login/Login";
import SignupForm from "./screens/Signup/Signup";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        { name: "ReactJs", questions: "40" },
        { name: "AngularJs", questions: "20" },
        { name: "PWA", questions: "30" },
        { name: "FireBase", questions: "10" }
      ],
      isSignup: false,
      user: false,
      selected: null
    };

    this.ShowSignup = this.ShowSignup.bind(this);
    this.ShowLogin = this.ShowLogin.bind(this);
    this.Login = this.Login.bind(this);
    this.DisplayInfo = this.DisplayInfo.bind(this);
    this.BackToList = this.BackToList.bind(this);
  }

  ShowSignup() {
    this.setState({ isSignup: true });
  }
  ShowLogin() {
    this.setState({ isSignup: false });
  }
  Login() {
    this.setState({ user: true });
  }

  DisplayInfo(index) {
    const { list } = this.state;
    this.setState({ selected: list[index] });
  }
  BackToList() {
    this.setState({ selected: null });
  }

  render() {
    const { list, selected, isSignup, user } = this.state;
    return (
      <div className="App">
        {!user ? (
          <Container>
            {!isSignup ? (
              <LoginForm ShowSignup={this.ShowSignup} Login={this.Login} />
            ) : (
              <SignupForm ShowLogin={this.ShowLogin} />
            )}
          </Container>
        ) : !selected ? (
          <QuizList list={list} DisplayInfo={this.DisplayInfo} />
        ) : (
          <Container>
            <QuizInfo selected={selected} BackToList={this.BackToList} />
          </Container>
        )}
      </div>
    );
  }
}

export default App;
