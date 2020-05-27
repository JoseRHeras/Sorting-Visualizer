import Swap from './Swap.js';

function InsertionSort(arr){

    const animationArray = [];
    const arrCopy = arr.slice();

    for(let i = 0; i < arrCopy.length; i++){

        let animationFrame = [i];
        let elementIndex = i;
        animationArray.push(animationFrame);
        
        while(elementIndex > 0 && arrCopy[elementIndex] < arrCopy[elementIndex - 1]){
            animationFrame = [elementIndex, elementIndex - 1];
            animationArray.push(animationFrame);

            Swap(arrCopy, elementIndex, elementIndex-1)

            animationFrame = [elementIndex, elementIndex - 1];
            animationArray.push(animationFrame);

            elementIndex--;
        }

        if(animationFrame.length === 1){
            animationArray.push(animationFrame);
        }
    }

    // console.log(arrCopy);

    return animationArray;

}

export default InsertionSort;