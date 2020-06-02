import Swap from "./Swap";

function getQuickSortAnimation(arr){
    const animationArray = [];
    const arrCopy = arr.slice();
    console.log(arrCopy);

    quickSort(arrCopy, 0, arrCopy.length - 1, animationArray)

    console.log(animationArray);
    return animationArray;

}

function quickSort(arr, start, end, animationArray){
    if(start < end){
        let pivot = partition(arr, start, end, animationArray);

        quickSort(arr, start , pivot - 1, animationArray);
        quickSort(arr, pivot + 1, end, animationArray)
    }
}

function partition(arr, start , end, animationArray){
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
            animationArray.push([leftSideIndex, rightSideIndex])
            Swap(arr, leftSideIndex, rightSideIndex)
            animationArray.push([leftSideIndex, rightSideIndex, arr[leftSideIndex], arr[rightSideIndex]])
        }
    }

    animationArray.push([start, rightSideIndex])
    Swap(arr, start, rightSideIndex)
    animationArray.push([start, rightSideIndex, arr[start], arr[rightSideIndex]])


    return rightSideIndex;
}

export default getQuickSortAnimation;