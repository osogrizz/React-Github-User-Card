import React, { Component } from 'react';
import './App.css';
import GitHubCalendar from 'react-github-calendar';
import ReactToolTip from 'react-tooltip'

import UserCard from './components/UserCard';
import Followers from './components/UserFollowers';

class App extends Component {
  constructor(){
    console.log('Contructor rendered!')
    super()

    this.state= {
      user: '',
      userFollowers: []
    }
  }

  componentDidMount() {
    console.log('cDM rendered!')
    const getUsers =  () => {
        fetch('https://api.github.com/users/osogrizz')
      .then( res => res.json())
      .then( user => {
        this.setState({
          user: user
        })
      })

      .catch(err => console.log(err))

    }
    getUsers()

    const getFollowers = () => {
      fetch('https://api.github.com/users/osogrizz/followers')
      .then(result => result.json())
      .then( followers => {
        this.setState({
          userFollowers: followers
        })
      })
      .catch( err => console.log(err))
    }
    getFollowers()
  }


  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <div style={{ display: 'flex', textAlign: 'left', justifyContent: 'center' }}>
          <GitHubCalendar  username="osogrizz" blockSize={12} fontSize={12}>
            <ReactToolTip delayShow={50} html />
          </GitHubCalendar>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <Followers userFollowers={this.state.userFollowers} />
        </div>
      </div>
    );
  }
}

export default App;
