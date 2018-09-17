import React, { Component } from 'react';
import '../../App.css';

class QuizInfo extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const {selected , BackToList} = this.props
    return (
      <div>
        <h1>{selected.name}</h1>
        <h3>Total Questions : {selected.questions}</h3>
        <br/>
        <br/>
        <button onClick={BackToList} >Back to List</button>
      </div>
    );
  }
}

export default QuizInfo;