import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const UserFollowers = (props) => {
  const classes = useStyles()
  console.log(props)
  return (
    <>
      {props.userFollowers.map( follower => (
        <Card className={classes.card} >
          <CardMedia 
            className={classes.media}
            image={follower.avatar_url}
          />
          <h2 key={follower.id}>{follower.login}</h2>  
        </Card>
      ))}
    </>
  )
}

export default UserFollowers
