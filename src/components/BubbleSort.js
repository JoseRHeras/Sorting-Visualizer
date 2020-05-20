export default function BubbleSortColoring(arr){
    const coloredArray = [];
    const arrayCopy = arr.slice();
    // var pointA;
    // var pointB;

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            // coloredArray.push([j, j + 1]);
            // var tempArrayContainer = [j, j + 1]

            if(arrayCopy[j] > arrayCopy[j + 1]){

                swap(arrayCopy, j, j + 1); 
                // coloredArray.push([j, j + 1, arrayCopy[j], arrayCopy[j + 1]]); 

                coloredArray.push([j, j + 1, arrayCopy[j], arrayCopy[j + 1]]);
                // tempArrayContainer.push(arrayCopy[j + 1]);
            }

            // coloredArray.push(tempArrayContainer);
        }
    }

    // console.log(arrayCopy);
    // console.log(coloredArray);
    return coloredArray;
}

//Helper Fucntions which performs swap
function swap(arr, a, b){
    var temporalHolder = arr[a];
    arr[a] = arr[b];
    arr[b] = temporalHolder;
}