import React from 'react'

const UserCard = (props) => {
  console.log(props)
  return (  

    <div>
      <h1>{props.user.name}</h1>
      <h3>{props.user.login}</h3>
      <p>Followers: {props.user.followers}</p>
    </div>
  )
}

export default UserCard
