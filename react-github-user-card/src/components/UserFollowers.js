import React from 'react'

const UserFollowers = (props) => {
  console.log(props)
  return (
    <div>
      {props.userFollowers.map( follower => (
        <h2 key={follower.id}>{follower.login}</h2>  
      ))}
    </div>
  )
}

export default UserFollowers
