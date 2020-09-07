import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: '#3333',
    minHeight: 'auto'
  },
  media: {
    height: 140,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14
  },
  id: {
    fontSize: 14
  }
});

const Posts = (props) => {

  const {id, title} = props.post
  const classes = useStyles();

  return (
   
    
    <div  style={{ margin: '10px', width: '25%' }}>
      
        <Card className={classes.root}>
          
            <CardContent>
              <Typography className={classes.id} gutterBottom variant="h5" component="h5">
                Post No : {id}
              </Typography>
              <Typography variant="body2" className={classes.title} color="textSecondary" component="p">
                {title}
              </Typography>
            </CardContent>
         
          <CardActions>
            <Link to={"/SinglePost/" + id}>
              <Button style={{marginTop: '100px', textAlign: 'right'}} size="small" variant="contained" color="primary">
                Read More <FontAwesomeIcon icon={faAngleDoubleRight} /> 
              </Button>
            </Link>
          </CardActions>
        </Card>
      
    </div>
    
    
  );
};

export default Posts;

