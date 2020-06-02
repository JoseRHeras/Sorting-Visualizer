import Swap from "./Swap";

function getHeapSortAnimation(arr){
    const arrCopy = arr.slice();
    const animationArray = [];
    console.log(arrCopy);
    heapSort(arrCopy, animationArray);

    console.log(arrCopy);

    return animationArray;
}

function heapSort(intArray, animationArray){
    buildMaxHeap(intArray, animationArray);
    // sortHeap(intArray, animationArray);
}

function buildMaxHeap(intArray, animationArray){

    for(let i = 1; i < intArray.length; i++){

        let toToMoveIndex = i;
        

        while(toToMoveIndex > 0 && intArray[Math.floor((toToMoveIndex - 1) / 2)] < intArray[toToMoveIndex]){
            Swap(intArray, (Math.floor((toToMoveIndex - 1) / 2)), toToMoveIndex);
            console.log(intArray);

            toToMoveIndex = Math.floor((toToMoveIndex - 1) / 2);
        }    
    }
}

function sortHeap(intArray, animationArray){

}

export default getHeapSortAnimation;