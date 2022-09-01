import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state = {
    dishes : null,
    errMess : null
  }

  componentDidMount(){
    console.log("ComponentDidMount : ", this.state);
    axios.get('http://localhost:3001/dishes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        dishes:data
      });
    })
    .catch(error => {
      this.setState({
        errMess: error.message
      });
    });

    // axios.post(' http://localhost:3001/dishes',{name:"Pizza", price:"799"})
    // .then(response => console.log(response));

    //  axios.put(' http://localhost:3001/dishes/1',{name:"Cheese cake", price:"250"})
    //  .then(response => console.log(response));

    // axios.delete(' http://localhost:3001/dishes/0')
    // .then(response => console.log(response));
  }
componentDidUpdate(){
  console.log("Update : ", this.state);
}
  render(){
    return (
      <div className="App">
  
      </div>
    );
  }

}

export default App;
