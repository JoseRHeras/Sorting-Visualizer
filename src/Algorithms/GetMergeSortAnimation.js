function getMergeSortAnimation(arr){
    let originalArrayCopy = arr.slice();
    const animationArray= [];
    mergeSort(originalArrayCopy, 0, originalArrayCopy.length - 1, animationArray)
    console.log(animationArray)
    return animationArray;
}

function mergeSort(arr, start, end, animation){
    
    if(start < end){
        
        let middlePoint = Math.floor((start + end) / 2);

        mergeSort(arr, start, middlePoint, animation);
        mergeSort(arr, middlePoint + 1, end, animation);

        merge(arr, start, middlePoint, end, animation);
    }
    
}

function merge(arr, start, middle, end, animation){

    let leftArray = [];
    let rightArray = [];

    for(let i = start; i <= middle; i++){   
        leftArray.push(arr[i]);
    }
    
    for(let i = middle + 1; i <= end; i++){
        rightArray.push(arr[i])
    }

    let leftIndex = 0;
    let rightIndex = 0;
    let arrIndex = start;

    while(leftIndex < leftArray.length && rightIndex < rightArray.length){

        if(leftArray[leftIndex] <= rightArray[rightIndex]){
            arr[arrIndex] = leftArray[leftIndex];

            animation.push( [arrIndex, leftArray[leftIndex]]);
            animation.push( [arrIndex] );

            leftIndex++;
        }
        else{

            arr[arrIndex] = rightArray[rightIndex];
            animation.push( [arrIndex, rightArray[rightIndex]] );
            animation.push( [arrIndex] );
            rightIndex++;
        }
        arrIndex++;
    }

    while(leftIndex < leftArray.length){
        arr[arrIndex] = leftArray[leftIndex];
        animation.push( [arrIndex, leftArray[leftIndex]] );
        animation.push( [arrIndex] );
        arrIndex++;
        leftIndex++;
    }

    while(rightIndex < rightArray.length){
        animation.push( [arrIndex, rightArray[rightIndex]] );
        animation.push( [arrIndex] );

        arr[arrIndex] = rightArray[rightIndex];                     
        arrIndex++;
        rightIndex++;
    }
}

export default getMergeSortAnimation;