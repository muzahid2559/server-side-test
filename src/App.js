import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  componentDidMount(){
    // axios.get('http://localhost:3001/dishes')
    // .then(response => response.data)
    // .then(data => console.log(data))
    // .catch(error => console(error.message));

    // axios.post(' http://localhost:3001/dishes',{name:"Pizza", price:"799"})
    // .then(response => console.log(response));

    //  axios.put(' http://localhost:3001/dishes/1',{name:"Cheese cake", price:"250"})
    //  .then(response => console.log(response));

    axios.delete(' http://localhost:3001/dishes/0')
    .then(response => console.log(response));


  }
  render(){
    return (
      <div className="App">
  
      </div>
    );
  }

}

export default App;
