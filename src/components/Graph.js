import React from 'react';
import GraphColumn from './GraphColumn';
import BubbleSort from './BubbleSort';
import './Graph.css';
import ButtonBar from './ButtonBar';
import { Grid } from '@material-ui/core';
 
const PRIMARY_COLOR = 'red';        //Default color
const SECONDARY_COLOR = 'blue';     //Color which indicates current position
const TIME = 0.05;       //Set the time interval
// const SIZE = 550;     //Number of elements to be sorted
const SIZE = getResolution();

class Graph extends React.Component{
    constructor() {
        super();
        this.state = {
            columnValues: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.bubbleSortVisualizer = this.bubbleSortVisualizer.bind(this);
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


    render(){
        //Create Bar components using data from columnValues Array

        const GraphColumnComponents = this.state.columnValues.map((value, idx) => 
            <GraphColumn key={idx} height={value} color={PRIMARY_COLOR}/>);

        return(
            <div>
                <Grid item lg={12}>
                    <ButtonBar 
                        generateArray={this.handleClick}
                        bubbleSort={this.bubbleSortVisualizer}          
                    />
                </Grid>

                {/* Display elements on the screen */}
                {/* <div className="bar-container">
                    <Grid item lg={11}>
                        {GraphColumnComponents}  
                    </Grid>               
                </div> */}


                <Grid item lg={12}>
                    {GraphColumnComponents}  
                </Grid>               
            </div>
        );
    }
}

//Function which genrates array of size "SIZE"
//SIZE is a constant defined by getResolution() when app is created.
//Takes no parameters and returns an array with "SIZE" elements 
function generateArray (){
    const numberArray = [];

    for(var i = 0; i < SIZE; i++){
        numberArray.push(Math.round(Math.random() * 1000));
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
