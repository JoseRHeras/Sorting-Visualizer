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
            <Button color="primary" variant="contained" onClick={prop.generateNewRandomArray}>Generate</Button>
            <Button color="secondary" variant="contained" onClick={prop.bubbleSort}>Bubble Sort</Button>
            <Button color="secondary" variant="contained" onClick={prop.selectionSort}>Selection Sort</Button>
            <Button color="secondary" variant="contained" onClick={prop.insertionSort} >Insertion Sort</Button>
            <Button color="secondary" variant="contained" onClick={prop.mergeSort}>Merge Sort</Button>
            <Button color="secondary" variant="contained" onClick={prop.quickSort}>Quick Sort</Button>
            <Button color="secondary" variant="contained" onClick={prop.heapSort}>Heap Sort</Button>
            {/* <Button color="primary" variant="contained" onClick={prop.resetGraph}>Reset</Button> */}
        </div>
    )
}