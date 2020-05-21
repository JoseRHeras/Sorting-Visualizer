import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));


export default function ButtonBar(prop) {
const classes = useStyles();

    return(
        <div className={classes.root}>
            <Button color="primary" variant="contained"onClick={prop.generateArray}>Generate</Button>
            <Button color="secondary" variant="contained" onClick={prop.bubbleSort}>Bubble Sort</Button>
            <Button color="secondary" variant="contained">Selection Sort</Button>
            <Button color="secondary" variant="contained">Merge Sort</Button>
            <Button color="secondary" variant="contained">Quick Sort</Button>
            <Button color="secondary" variant="contained">Heap Sort</Button>
        </div>
    )
}