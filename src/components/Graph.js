import React from 'react';
import Column from './Column.js';
import BubbleSort from './BubbleSort';
import './Graph.css';
import ButtonBar from './ButtonBar';
import { Grid } from '@material-ui/core';
import SelectionSort from '../Algorithms/SelectionSort.js';
import InsertionSort from '../Algorithms/InsertionSort.js';
 
const PRIMARY_COLOR = 'red';        //Default color
const SECONDARY_COLOR = 'blue';     //Color which indicates current position
const SORTED_COLOR = 'green';       //Sorted element color. 

//Set the time and the size of the graph:

const TIME = 0.05;                  //Set the time interval 

//Temporal variables used for testing

// const SIZE = 900;
// const TIME = 10;

class Graph extends React.Component{
    constructor() {
        super();
        this.state = {
            randomIntArray: getNewRandonValuesArray()
        }
        this.handleGenerate = this.handleGenerate.bind(this);
        this.handleBubbleSort = this.handleBubbleSort.bind(this);
        this.handleSelectionSort = this.handleSelectionSort.bind(this);
        this.handleInsertionSort = this.handleInsertionSort.bind(this);
    }

    handleGenerate(){
        const columnElementsArray = document.getElementsByClassName('column');

        for(let i = 0; i < columnElementsArray.length; i++){
            let column = columnElementsArray[i].style;
            column.backgroundColor = PRIMARY_COLOR;
        }

        this.setState({randomIntArray: getNewRandonValuesArray()})
    }


    handleBubbleSort(){
        const animationArray = BubbleSort(this.state.randomIntArray);
        const columnElementsArray = document.getElementsByClassName('column');

        for(let i = 0; i < animationArray.length; i++){    
            const[columnOneIndex, columnTwoIndex] = animationArray[i];

            const columnOne = columnElementsArray[columnOneIndex].style;
            const columnTwo = columnElementsArray[columnTwoIndex].style;
       
            if(animationArray[i].length > 2){

                let columnOneHeight = animationArray[i][2];
                let columnTwoHeight = animationArray[i][3];

                setTimeout(() => {                         
                    columnOne.backgroundColor = SECONDARY_COLOR;
                    columnTwo.backgroundColor = SECONDARY_COLOR;
                    columnOne.height = columnOneHeight + "px";    
                    columnTwo.height = columnTwoHeight + "px";    
                }, i * TIME);

                setTimeout(() => {
                    columnOne.backgroundColor = PRIMARY_COLOR;
                    columnTwo.backgroundColor = PRIMARY_COLOR;
                }, (i * TIME) + (TIME * 1.0));

            }
            else{
                setTimeout(() => {
                    columnOne.backgroundColor = SECONDARY_COLOR;
                    columnTwo.backgroundColor = SECONDARY_COLOR;
                }, i * TIME);

                setTimeout(() => {
                    columnOne.backgroundColor = PRIMARY_COLOR;
                    columnTwo.backgroundColor = PRIMARY_COLOR;
                }, (i * TIME) + (TIME * 1.0));
            }
        }
    }

    handleSelectionSort() {
        const animationArray = SelectionSort(this.state.randomIntArray);
        const columnElementsArray = document.getElementsByClassName('column');

        let swapColumnHeight;
        let storedSmallestIntegerIndex;             
        let leftIntegerIndex;             
        let integerBeingComparedToLeftInt = -1;   

        for(let i = 0; i < animationArray.length; i++){

            if(animationArray[i].length === 1 || animationArray[i].length === 4){
                swapColumnHeight = animationArray[i].length === 4 ? true: false;
                const [columnOneIndex] = animationArray[i];
                const columnOne = columnElementsArray[columnOneIndex].style;

                if(swapColumnHeight){                   
                    const columnTwo = columnElementsArray[animationArray[i][1]].style;
                    const columnTwoColor = columnOneIndex === animationArray[i][1] ? SORTED_COLOR: PRIMARY_COLOR;

                    setTimeout(() => {
                        columnOne.height = animationArray[i][3] + 'px';
                        columnTwo.height = animationArray[i][2] +  'px';
                        columnOne.backgroundColor = SORTED_COLOR;
                        columnTwo.backgroundColor = columnTwoColor;      
                    }, (i * TIME) + (TIME));
                }
                else{   
                    setTimeout(() => {
                        columnOne.backgroundColor = SECONDARY_COLOR;
                    }, (i * TIME) + (TIME));

                    storedSmallestIntegerIndex = columnOneIndex;
                    leftIntegerIndex = columnOneIndex;
                }
            }
            else{
                const[columnOneIndex, columnTwoIndex] = animationArray[i];
                const columnTwo = columnElementsArray[columnTwoIndex].style;

                if(storedSmallestIntegerIndex === columnOneIndex){       
                    
                    setTimeout(() => {
                        columnTwo.backgroundColor = SECONDARY_COLOR;
                    }, (i * TIME) + (TIME));

                    if(integerBeingComparedToLeftInt === columnTwoIndex){
                        setTimeout(() => {
                            columnTwo.backgroundColor = PRIMARY_COLOR;
                        }, (i * TIME) + (TIME));
                    }

                    integerBeingComparedToLeftInt = columnTwoIndex;
                }
                else{
                    if(columnTwoIndex !== leftIntegerIndex){
                        setTimeout(() => {
                            columnTwo.backgroundColor = PRIMARY_COLOR;
                        }, (i * TIME) + (TIME));
                    }

                    storedSmallestIntegerIndex = columnOneIndex;
                }
            }
        }
        
    }

    handleInsertionSort() {
        const animation = InsertionSort(this.state.randomIntArray);
        // console.log(animation);

        const columnElementsArray = document.getElementsByClassName('column');

        for(let i = 0; i < animation.length; i++){

            

        }
    }

    render(){
        return(
            <div>
                <Grid item >
                    <ButtonBar 
                        generateNewRandomArray={this.handleGenerate}
                        bubbleSort={this.handleBubbleSort}
                        selectionSort={this.handleSelectionSort}
                        insertionSort={this.handleInsertionSort}   
                    />
                </Grid>

                <Grid item >
                    {this.state.randomIntArray.map((value, idx) => <Column key={idx} height={value} color={PRIMARY_COLOR}/>)}
                </Grid>               
            </div>
        );
    }
}


function getNewRandonValuesArray (){
    const randomIntArray = [];
    let maxHeightAllowed = window.innerHeight / 1.33;
    let maxNumberOfElementsAllowed = window.innerWidth / 5;

    for(var i = 0; i < maxNumberOfElementsAllowed; i++){
        randomIntArray.push(Math.round(Math.random() * maxHeightAllowed));
    }
    return randomIntArray;
}

export default Graph;
