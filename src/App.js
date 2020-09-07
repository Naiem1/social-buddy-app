import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';
import Comments from './components/Comments/Comments';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton, AppBar, Toolbar } from '@material-ui/core';

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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



function App() {
  const classes = useStyles();
  return (
    <div className="app">
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
         
        </IconButton>
        <Typography className={classes.title} variant="h5" noWrap>
        Social Buddy
        </Typography>
        <IconButton aria-label="search" color="inherit">
          
        </IconButton>
        <IconButton aria-label="display more actions" edge="end" color="inherit">
          
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
      
      <Router>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route exact path="/" component={Home} />
          <Route path="/singlePost/:userId" component={SinglePost} />
          <Route path="*" component={NotFound}/>

        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
