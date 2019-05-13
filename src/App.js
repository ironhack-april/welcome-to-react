import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome' //import component


class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Welcome user="niko" library="React.js" things={['pizza', 'burrito', 'sushi', 'arepa']} /> 

      </div>
    );
  }
}

export default App;
