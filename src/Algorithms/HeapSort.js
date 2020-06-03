import Swap from "./Swap";

function getHeapSortAnimation(arr){
    const arrCopy = arr.slice();
    const animationArray = [];
    heapSort(arrCopy, animationArray);

    // console.log(arrCopy)
    console.log(animationArray)
    return animationArray;
}

function heapSort(intArray, animationArray){
    createMaxHeap(intArray, animationArray);
    sortHeap(intArray, animationArray);
}

function createMaxHeap(intArray, animationArray){

    for(let i = 1; i < intArray.length; i++){

        let toToMoveIndex = i;
        
        while(toToMoveIndex > 0 && intArray[Math.floor((toToMoveIndex - 1) / 2)] < intArray[toToMoveIndex]){

            animationArray.push([(Math.floor((toToMoveIndex - 1) / 2)), toToMoveIndex])
            Swap(intArray, (Math.floor((toToMoveIndex - 1) / 2)), toToMoveIndex);

            animationArray.push([(Math.floor((toToMoveIndex - 1) / 2)), toToMoveIndex, intArray[(Math.floor((toToMoveIndex - 1) / 2))], intArray[toToMoveIndex]]);

            toToMoveIndex = Math.floor((toToMoveIndex - 1) / 2);
        }    
    }
}

function sortHeap(intArray, animationArray){
    let arraySize = intArray.length - 1;


    for (let i = arraySize; i > 0; i--) 
        { 
            animationArray.push([0, i])
            Swap(intArray, 0, i)
            animationArray.push([0, i, intArray[0], intArray[i]])

            heapify(intArray, i, 0, animationArray) 
        } 
}

function heapify(arr, heapSize, i, animationArray){


    let largest = i; 
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2; 
  
    if (leftChild < heapSize && arr[leftChild] > arr[largest]){
        largest = leftChild;
    }
      
    if (rightChild < heapSize && arr[rightChild] > arr[largest]){
        largest = rightChild;
    }
   
    if (largest !== i) 
    { 
        animationArray.push([i, largest])
        Swap(arr, i, largest)
        animationArray.push([i, largest, arr[i], arr[largest]])

        heapify(arr, heapSize, largest, animationArray); 
    }  
}

export default getHeapSortAnimation;