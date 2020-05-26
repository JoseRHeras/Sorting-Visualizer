function SelectionSort(arr) {
    const animationArray = [];
    const toBeSortedArray = arr.slice();

    let minIndex;

    for(let i = 0; i < toBeSortedArray.length; i++){
        minIndex = i;
        let currentCycleArray = [i];
        animationArray.push(currentCycleArray);

        for(let j = i + 1; j < toBeSortedArray.length; j++){
            
            currentCycleArray = [minIndex, j];                      //Highlight columns that are being compared
            animationArray.push(currentCycleArray);

            if(toBeSortedArray[j] < toBeSortedArray[minIndex]){     //If there is a change to the minimun value
                currentCycleArray = [j, minIndex ]                  //Update column bar to represent smallest value

                minIndex = j;              
            }
            else{ //If no change occur to the minimun value
                currentCycleArray = [minIndex, j];                  //Highlight column that is the less turn to the normal that is not the less
            }
            
            animationArray.push(currentCycleArray);     
        }     
        swap(toBeSortedArray, i, minIndex)

        //Order: Original Number, Minimun element, New size for i, New size for minimun size
        currentCycleArray = [i, minIndex, toBeSortedArray[minIndex], toBeSortedArray[i]]        //Update columns to match new position of the values.
        animationArray.push(currentCycleArray);
    }

    console.log(animationArray)
    return animationArray;
}

function swap(arr, originalIndex, minimunIndex) {
    let temporalHolder = arr[originalIndex];
    arr[originalIndex] = arr[minimunIndex];
    arr[minimunIndex] = temporalHolder;
}

export default SelectionSort;