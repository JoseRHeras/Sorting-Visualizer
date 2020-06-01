import Swap from "./Swap";

function getQuickSortAnimation(arr){
    const animationArray = [];
    const arrCopy = arr.slice();
    console.log(arrCopy);

    quickSort(arrCopy, 0, arrCopy.length - 1)

    console.log(arrCopy);

}

function quickSort(arr, start, end){
    if(start < end){
        let pivot = partition(arr, start, end);

        quickSort(arr, start , pivot - 1);
        quickSort(arr, pivot + 1, end)
    }
}

function partition(arr, start , end){
    let pivot = arr[start];

    let leftSideIndex = start;
    let rightSideIndex = end;

    while(leftSideIndex < rightSideIndex){

        while(arr[leftSideIndex] <= pivot){
            leftSideIndex++;
        }

        while(arr[rightSideIndex] > pivot){
            rightSideIndex--;
        }

        if(leftSideIndex < rightSideIndex){
            Swap(arr, leftSideIndex, rightSideIndex)
        }
    }

    Swap(arr, start, rightSideIndex)

    return rightSideIndex;
}

export default getQuickSortAnimation;