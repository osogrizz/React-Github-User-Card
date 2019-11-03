import React, { Component } from 'react';
import './App.css';

import UserCard from './components/UserCard'

class App extends Component {
  constructor(){
    console.log('Contructor rendered!')
    super()

    this.state= {
      user: ''
    }
  }

  componentDidMount() {
    console.log('cDM rendered!')
    const getUsers =  () => {
        fetch('https://api.github.com/users/osogrizz')
      // .then(  res => console.log(res.json()))
      .then( res => res.json())
      .then( user => {
        this.setState({
          user: user
        })
      })
      .catch(err => console.log(err))
    }
    getUsers()
  }


  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
