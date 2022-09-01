import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component{
  componentDidMount(){
    // let a = fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json)
    // .then(data => console.log(data));

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .then(data => console.log(data));


  }
  render(){
    return (
      <div className="App">
  
      </div>
    );
  }

}

export default App;
