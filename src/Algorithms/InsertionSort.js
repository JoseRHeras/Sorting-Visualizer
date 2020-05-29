import Swap from './Swap.js';

function InsertionSort(arr){

    const animationArray = [];
    const arrCopy = arr.slice();
    let isThereASwap = false;

    for(let i = 0; i < arrCopy.length; i++){

        let animationFrame = i === 0? [i, i]: [ i , i - 1];
        let intBeingMovedIndex = i;

        
        animationArray.push(animationFrame);
        
        while(intBeingMovedIndex > 0 && arrCopy[intBeingMovedIndex] < arrCopy[intBeingMovedIndex - 1]){
            if(isThereASwap){
                animationArray.push([i , i - 1])
            }
            
            isThereASwap = true;

            Swap(arrCopy, intBeingMovedIndex, intBeingMovedIndex-1)

            animationFrame = [intBeingMovedIndex, intBeingMovedIndex - 1, arrCopy[intBeingMovedIndex], arrCopy[intBeingMovedIndex - 1]];
            animationArray.push(animationFrame);

            animationFrame = [intBeingMovedIndex, intBeingMovedIndex - 1];
            animationArray.push(animationFrame);

            intBeingMovedIndex--;
        }

        if(!isThereASwap){
            animationArray.push(animationFrame);
        }

        isThereASwap = false;
    }

    console.log(animationArray);

    return animationArray;

}

export default InsertionSort;