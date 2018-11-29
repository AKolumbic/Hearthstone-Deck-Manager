import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state={
    cards: []
  }

  // componentDidMount() {
  //   axios
  //     .get('http://localhost:8008/cards/')
  //     .then(res => {
  //       console.log("RESponse:", res)
  //       this.setState({ cards: res.data })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  getDrBoom () {
    axios
      .get('http://localhost:8008/drboom/')
      .then(boom => {
        console.log("Response: ", boom);
        this.setState({ cards: boom.data });
      })
      .catch(err => {
        console.log({ errorMessage: err });
      });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.getDrBoom()}>BOOM!</button>
      </div>
    );
  }
}

export default App;
