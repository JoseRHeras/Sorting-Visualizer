import React from 'react';
import GraphColumn from './GraphColumn';
import BubbleSort from './BubbleSort';
import './Graph.css'

const PRIMARY_COLOR = 'green';
const SECONDARY_COLOR = 'blue';

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

    handleSolve(){
        BubbleSort(this.state.columnValues);
        const barStyle = document.getElementsByClassName('column');

        const barOneStyle = barStyle[1].style;
        barOneStyle.backgroundColor = SECONDARY_COLOR;

        console.log(barStyle)
    }

    //Bubble sort
    bubbleSortVisualizer(){
        const visualArray = BubbleSort(this.state.columnValues);
        const barStyle = document.getElementsByClassName('column');

        console.log(visualArray);
        console.log(barStyle);

        for(var i = 0; i < visualArray.length; i++){

            const[pointAIndex, pointBIndex] = visualArray[i];

            const barOne = barStyle[pointAIndex.toString()].style;
            const barTwo = barStyle[pointBIndex.toString()].style;

            setTimeout(() => {
                barOne.backgroundColor = SECONDARY_COLOR;
                barTwo.backgroundColor = SECONDARY_COLOR;
              }, 2000);

            // pointA.backgroundColor = SECONDARY_COLOR;
            // pointB.backgroundColor = SECONDARY_COLOR;
        }
    }


    render(){
        //Create Bar components using data from columnValues Array
        const GraphColumnComponents = this.state.columnValues.map((value) => 
            <GraphColumn key={value} height={value} color={PRIMARY_COLOR}/>);

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

    for(var i = 0; i < 10; i++){
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