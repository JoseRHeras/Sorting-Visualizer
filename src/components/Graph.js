import React from 'react';
import GraphColumn from './GraphColumn';
import BubbleSort from './BubbleSort';
import './Graph.css'

const PRIMARY_COLOR = 'green';
const SECONDARY_COLOR = 'blue';
const TIME = 0.1;

class Graph extends React.Component{
    constructor() {
        super();
        this.state = {
            columnValues: []
        }
        this.handleClick = this.handleClick.bind(this);
        // this.handleSolve = this.handleSolve.bind(this);
        this.bubbleSortVisualizer = this.bubbleSortVisualizer.bind(this);
    }

    //Generates a new array on mounting of a new state
    componentDidMount() {
        const newColumnValues = generateArray();
        // console.log(newColumnValues);
        this.setState({columnValues: newColumnValues})
    }

    handleClick(){
        this.setState({columnValues: generateArray()})
    }


    //Bubble sort
    bubbleSortVisualizer(){
        const visualArray = BubbleSort(this.state.columnValues);
        
        for(var i = 0; i < visualArray.length; i++){

            const barStyle = document.getElementsByClassName('column');
            const[pointAIndex, pointBIndex] = visualArray[i];

            const barOne = barStyle[pointAIndex].style;
            const barTwo = barStyle[pointBIndex].style;


            const changeColor = visualArray[i].length > 2;
            let barOneHeight;
            let barTwoHeight;
           
            console.log(changeColor)
       
            if(changeColor){

                // setTimeout(() => {
                //     barOne.backgroundColor = SECONDARY_COLOR;
                //     barTwo.backgroundColor = SECONDARY_COLOR;
                // }, i * TIME);


                barOneHeight = visualArray[i][2];
                barTwoHeight = visualArray[i][3];

                setTimeout(() => {
                    barOne.height = barOneHeight + "px";
                    barTwo.height = barTwoHeight + "px";

                }, i * TIME);

                // setTimeout(() => {
                //     barOne.backgroundColor = PRIMARY_COLOR;
                //     barTwo.backgroundColor = PRIMARY_COLOR;
                // }, i * TIME);

            }
            // else{
            //     setTimeout(() => {
            //         barOne.backgroundColor = PRIMARY_COLOR;
            //         barTwo.backgroundColor = PRIMARY_COLOR;
            //     }, i * TIME);
            // }          
                // console.log(barOneHeight, barTwoHeight);
        }
    }


    render(){
        //Create Bar components using data from columnValues Array

        const GraphColumnComponents = this.state.columnValues.map((value, idx) => 
            <GraphColumn key={idx} height={value} color={PRIMARY_COLOR}/>);

        return(
            <div>
                <button onClick={this.handleClick}>Generate Numbers</button>
                <button onClick={this.bubbleSortVisualizer}>Bubble Sort</button>
                {/* Display elements on the screen */}
                <div className="bar-container">
                    {GraphColumnComponents}                 
                </div>
            </div>
        );
    }
}

function generateArray (){
    const numberArray = [];

    for(var i = 0; i < 800; i++){
        numberArray.push(Math.round(Math.random() * 1000));
    }
    return numberArray;
}

export default Graph;

function swap(arr, i, j){
    var temporalHolder = arr[i];
    arr[i] = arr[j];
    arr[j] = temporalHolder;
}