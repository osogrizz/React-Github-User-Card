import React, { Component } from 'react';
import './App.css';
import GitHubCalendar from 'react-github-calendar';
import ReactToolTip from 'react-tooltip';
import styled from 'styled-components';

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
        <GitHubContainer>
          <GitHubCalendar  username="osogrizz" blockSize={12} fontSize={12} theme={defaultTheme} >
            <ReactToolTip delayShow={50} html />
          </GitHubCalendar>
        </GitHubContainer>
        <FolowerConatiner>
          <Followers userFollowers={this.state.userFollowers} />
        </FolowerConatiner>
      </div>
    );
  }
}

export default App;


const FolowerConatiner = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const GitHubContainer = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin: 0 2%;
`

const defaultTheme = {
  background: 'transparent',
  text: '#fff',
  grade4: '#ff6a00',
  grade3: '#fc8403',
  grade2: '#fca103',
  grade1: '#fcc603',
  grade0: '#777',

};