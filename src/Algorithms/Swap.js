/*This functions is in chareg of performing swap two elements in the arr which is passed as a 
paramenters. It is intended to be used in InsertionSort, SelectionSort and BubbleSort */

function Swap(arr, indexOne, indexTwo){
    const temporalHolder = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temporalHolder;
}

export default Swap;