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
    width: 340,
    margin: '20px 8px',
  },
  media: {
    height: 240,
  },
});

const UserFollowers = (props) => {
  const classes = useStyles()
  console.log(props)
  return (
    <>
      {props.userFollowers.map( follower => (
        <Card key={follower.id} className={classes.card} >
          <CardActionArea>
            <CardMedia 
              className={classes.media}
              image={follower.avatar_url}
              />
            <CardContent>
              <Typography variant="h5" component="h2" >{follower.login}</Typography>  
              {/* <Typography variant="body 2" color="textSecondary" component="p">
                text text text
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">
                share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
          </CardActions >
        </Card>
      ))}
    </>
  )
}

export default UserFollowers
