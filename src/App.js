import React from 'react';
import logo from './logo.svg';
import './App.css';
import CageImage from './Components/CageImage';

class App extends React.Component {

  state = {
    showNickCage: true
  }

  buttonClickHandler = () => {this.setState({showNickCage: !this.state.showNickCage})}

  render() {
    return (
      <div className="App">
          <h1>Show The Cage</h1>
          <CageImage showNickCage={this.state.showNickCage}/>
          <button onClick={this.buttonClickHandler}> {this.state.showNickCage ? 'Cage the Cage' : 'Show the Cage'}
          </button>
      </div>
    );
  }
}

export default App;
