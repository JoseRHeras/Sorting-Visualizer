import React from 'react';
import Graph from './components/Graph';
import './App.css'
import { Grid } from '@material-ui/core';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   padding: theme.spacing(3),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },
  }));

function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container  justify="center">
                <Graph />
            </Grid>
        </div>
        
    )
}

export default App;