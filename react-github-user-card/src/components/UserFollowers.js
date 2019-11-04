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
    background: '#424242',  
    color: '#fff'
  },
  media: {
    height: 240,
    background: '#fff'
  },
  button: {
    color: '#90caf9'
  },
  links: {
    textDecoration: 'none',
    color: '#fff'
  }
});

const UserFollowers = (props) => {
  const classes = useStyles()
  console.log(props)
  return (
    <>
      {props.userFollowers.map( follower => (
        <Card key={follower.id} className={classes.card} >
          <CardActionArea >
            <a href={follower.html_url} target="_blank" rel="noopener noreferrer" className={classes.links} >
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
            </a>
          </CardActionArea>
          <CardActions>
            <Button size="small" className={classes.button}>
              Contributions
            </Button>
            <Button size="small" className={classes.button}>
              repo page
            </Button>
          </CardActions >
        </Card>
      ))}
    </>
  )
}

export default UserFollowers
