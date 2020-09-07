import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import Comments from '../Comments/Comments';




const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  }
  
});

const SinglePost = () => {

  const { userId } = useParams()
  
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  useEffect(() => {
    const url = "https://randomuser.me/api/";
    fetch(url)
      .then(res => res.json())
      .then(data => setProfiles(data.results))
  }, [])
  
 const getProfilePic = profiles.map(profilePic => profilePic.picture.large )

 const classes = useStyles();

  return (

      <Container  maxWidth="md"  style={{backgroundColor: '#333', height: 'auto'}}>
      
          <Card  className={classes.root}>
          <CardContent>
            <Container maxWidth="md" style={{height:'150px'}}>
              <Typography component={Container} className={classes.title} variant="" component="h1" color="primary" gutterBottom>
                Details Post : {userId}
              </Typography>
              <Typography component={Container} className={classes.title} variant="" component="h1" color="primary" gutterBottom>
              {details.title}
              </Typography>
            
              <Typography variant="body2" component="p">
              {details.body}
              
             </Typography>
            
            </Container>
          </CardContent>

        </Card>

        <Container maxWidth="sm">
            {

          comments.map(comment => <Comments
                      profile={getProfilePic}
                      comment={comment}>
                      </Comments>)
            }
        </Container>
    </Container>
  );
};

export default SinglePost;


    

