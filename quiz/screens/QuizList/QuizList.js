import React, { Component } from 'react';
import '../../App.css';

class QuizList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {list,DisplayInfo} = this.props;
    return (
      <ol>
        {list.map((value,index) => {
          return(
            <li>
              <span>{value.name}</span>
              <button onClick={() => {DisplayInfo(index)}} >Enter Quiz</button>
            </li> 
          )
        })}
      </ol>
    );
  }
}

export default QuizList;
