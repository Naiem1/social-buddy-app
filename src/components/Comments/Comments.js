import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import { spacing } from '@material-ui/system';





const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
    paddingTop: 30,
    paddingBottom: 50
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  small: {
    textAlign: 'right',
    fontWeight: 'bold',
  }
  
});

const Comments = (props) => {
  const { name, email, body } = props.comment;
  const profile = props.profile;
  
  const classes = useStyles();
  return (
    <div style={{ display: 'flex' }}>
      <div style={{marginTop: '25px', marginRight: '5px'}}>
          <img style={{ borderRadius: '50%', width: '50px', height: '50px'}} src={profile} alt=""/>
      </div>
      
        <Card  className={classes.root}>
        <CardContent>
          <Container maxWidth="md" style={{height:'60px'}}>
            <Typography component={Container} className={classes.title} variant="" component="h4" color="primary" gutterBottom>
            {name}
          </Typography>
          
            <Typography variant="body2" component="p">
              {body}
              
            </Typography>
            <Typography variant="body2" className={classes.small} component="p">
              <p><small>Comments...</small></p>
              
            </Typography>
          </Container>
        </CardContent>

      </Card>
        
    
    </div>
  );
};

export default Comments;

// <div>
//           <div style={{margin: '10px', padding: '10px'}}>
//           <h4>{name}</h4>
//           <p><small>{email}</small></p>
//           <pre>
//             {body}
//           </pre>
//           </div>
//       </div>
      