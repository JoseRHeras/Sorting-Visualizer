import React from 'react';
import GraphColumn from './GraphColumn';
import BubbleSort from './BubbleSort';
import './Graph.css';
import ButtonBar from './ButtonBar';
import { Grid } from '@material-ui/core';
import SelectionSort from '../Algorithms/SelectionSort.js';
 
const PRIMARY_COLOR = 'red';        //Default color
const SECONDARY_COLOR = 'blue';     //Color which indicates current position
const SORTED_COLOR = 'green';       //Sorted element color. 

//Set the time and the size of the graph:

const TIME = 0.05;                  //Set the time interval     
const SIZE = getResolution();       //Number of elements to be sorted

//Temporal variables used for testing

// const SIZE = 900;
// const TIME = 10;

class Graph extends React.Component{
    constructor() {
        super();
        this.state = {
            columnValues: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.bubbleSortVisualizer = this.bubbleSortVisualizer.bind(this);
        this.handleSelectionSort = this.handleSelectionSort.bind(this);
    }

    //Generates a new array on mounting of a new state
    componentDidMount() {
        const newColumnValues = generateArray();
        this.setState({columnValues: newColumnValues})
    }

    handleClick(){
        this.setState({columnValues: generateArray()})
    }


    //Bubble sort implementation
    //The main objective of this funtion is to handle bubble sort visualization.
    //Its triggered throught a click event does not take any input.
    bubbleSortVisualizer(){
        //Perfrom bubble sort and retrieves an array containing sequences to be used in the animation procedure.
        const visualArray = BubbleSort(this.state.columnValues);
        //Creates an array with references to the barColumn which are to be updated.
        const barStyle = document.getElementsByClassName('column');

        for(let i = 0; i < visualArray.length; i++){    //Modified const to let
            //Index to be used to get the correspoding bar elements for barStyle array.
            const[pointAIndex, pointBIndex] = visualArray[i];

            //BarStyle which are updated or not depending of the values from visualArray
            const barOne = barStyle[pointAIndex].style;
            const barTwo = barStyle[pointBIndex].style;
       
            //If the array to be executed contains a change this block will be executed
            if(visualArray[i].length > 2){

                let barOneHeight = visualArray[i][2];           //variable contains the new height to be assigned to the bar 
                let barTwoHeight = visualArray[i][3];

                setTimeout(() => {                          //Timer changes and switch colums
                    barOne.backgroundColor = SECONDARY_COLOR;
                    barTwo.backgroundColor = SECONDARY_COLOR;
                    barOne.height = barOneHeight + "px";    //Height of the bar element is change to simutale switch
                    barTwo.height = barTwoHeight + "px";    //of bars
                }, i * TIME);

                setTimeout(() => {
                    barOne.backgroundColor = PRIMARY_COLOR;
                    barTwo.backgroundColor = PRIMARY_COLOR;
                }, (i * TIME) + (TIME * 1.0));//((i * TIME) * 0.05));       //Old time 1000. Adds delay between color switch

            }else{  //If no switch occurs then this bloc executes.
                setTimeout(() => {
                    barOne.backgroundColor = SECONDARY_COLOR;
                    barTwo.backgroundColor = SECONDARY_COLOR;
                }, i * TIME);

                setTimeout(() => {
                    barOne.backgroundColor = PRIMARY_COLOR;
                    barTwo.backgroundColor = PRIMARY_COLOR;
                }, (i * TIME) + (TIME * 1.0));//((i * TIME) * 0.05));        // 1000 old time. Extra cal creates delay between color switch
            }
        }
    }

    handleSelectionSort() {
        const animationArray = SelectionSort(this.state.columnValues);
        const barStyles = document.getElementsByClassName('column');
        let sortedBar = true;
        let lowestElementIndex;             //Stores the index of the element with the smallest element in the array.
        let toBeSwappedElement;             //Stores the index of the element which is to be swapped with the smallest element in the array.
        let currentPointerElement = -1;     //Servers as a placeholder to detect if the smallest element has changed.

        for(let i = 0; i < animationArray.length; i++){
            

            if(animationArray[i].length === 1 || animationArray[i].length === 4){
                sortedBar = !sortedBar;     //Serves as a on/off switch which is used to determine is a size swap is need it to be performed.

                const [pointAIndex] = animationArray[i];
                const barOne = barStyles[pointAIndex].style;
                // const barTwo = animationArray[i].length === 4 ? barStyles[animationArray[i][1]].style : 0;

                if(sortedBar){      //Takes care of the swapping of bar height along with changing color of a sorted bar.

                    const barTwo = animationArray[i].length === 4 ? barStyles[animationArray[i][1]].style : 0;
                    const color = pointAIndex === animationArray[i][1] ? SORTED_COLOR: PRIMARY_COLOR;
                    setTimeout(() => {
                        barOne.height = animationArray[i][3] + 'px';
                        barTwo.height = animationArray[i][2] +  'px';
                        barOne.backgroundColor = SORTED_COLOR;
                        // barTwo.backgroundColor = PRIMARY_COLOR;
                        barTwo.backgroundColor = color;      
                    }, (i * TIME) + (TIME));
                }
                else{               //Hightlight which bar is to be swapped with the next smallest value on the array.
                    setTimeout(() => {
                        barOne.backgroundColor = SECONDARY_COLOR;
                    }, (i * TIME) + (TIME));
                    lowestElementIndex = pointAIndex;
                    toBeSwappedElement = pointAIndex;
                }
            }
            else{
                const[pointAIndex, pointBIndex] = animationArray[i];
                const barOne = barStyles[pointAIndex].style;
                const barTwo = barStyles[pointBIndex].style;

                /* If lowestElementIndex is the same as the new pointAIndex. No changes the lowest value therefore j
                just the secondary bar needs to be updated.*/
                if(lowestElementIndex === pointAIndex){       
                    
                    setTimeout(() => {
                        barTwo.backgroundColor = SECONDARY_COLOR;
                    }, (i * TIME) + (TIME));

                    if(currentPointerElement === pointBIndex){
                        setTimeout(() => {
                            barTwo.backgroundColor = PRIMARY_COLOR;
                        }, (i * TIME) + (TIME));
                    }
                    currentPointerElement = pointBIndex;

                }else{
                    /*Otherewise it indicates a change has ocurred therefore barOne is updated to PRIMARYCOLOR and the new 
                    lowest element bar is kep with a secondary color and lowestElementIndex is changed to reflect this change */
                    if(pointBIndex !== toBeSwappedElement){
                        setTimeout(() => {
                            barTwo.backgroundColor = PRIMARY_COLOR;
                        }, (i * TIME) + (TIME));
                    }

                    lowestElementIndex = pointAIndex;
                }
            }
        }
        
    }


    render(){
        //Create Bar components using data from columnValues Array

        const GraphColumnComponents = this.state.columnValues.map((value, idx) => 
            <GraphColumn key={idx} height={value} color={PRIMARY_COLOR}/>);

        return(
            <div>
                {/* Calls ButtonBar fucntions. Pass event handlers as parameters */}
                <Grid item >
                    <ButtonBar 
                        generateArray={this.handleClick}
                        bubbleSort={this.bubbleSortVisualizer}
                        selectionSort={this.handleSelectionSort}        
                    />
                </Grid>

                {/* Grid holds each indiviudal bar */}
                <Grid item >
                    {GraphColumnComponents}  
                </Grid>               
            </div>
        );
    }
}

//Function which generates array where number of elements === const "SIZE"
//SIZE is a constant defined by getResolution() when app is rendered.
//Takes no parameters and returns an array with "SIZE" elements 
function generateArray (){
    const numberArray = [];
    let maxSize = window.innerHeight / 1.33;        //Size of the bar is adjusted using the size of the screen being used by the user.

    for(var i = 0; i < SIZE; i++){
        numberArray.push(Math.round(Math.random() * maxSize));
    }
    return numberArray;
}

//Function which get the size of the browser screen
//Takes no input and return size of the screen divided by 5
function getResolution() {
    let resolution = window.innerWidth / 5;
    return resolution;
}

export default Graph;
