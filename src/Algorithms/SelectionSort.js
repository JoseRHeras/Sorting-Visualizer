function SelectionSort(arr) {
    const animationArray = [];
    const arrayCopy = arr.slice();

    let minIndex;

    for(let i = 0; i < arrayCopy.length; i++){
        minIndex = i;
        let currentCycleArray = [i];
        animationArray.push(currentCycleArray);

        for(let j = i + 1; j < arrayCopy.length; j++){
            
            currentCycleArray = [minIndex, j];                      //Highlight columns that are being compared
            animationArray.push(currentCycleArray);

            if(arrayCopy[j] < arrayCopy[minIndex]){                 //If there is a change to the minimun value
                currentCycleArray = [j, minIndex ]                  //Update column bar to represent smallest value

                minIndex = j;              
            }
            else{ //If no change occur to the minimun value
                currentCycleArray = [minIndex, j];                  //Highlight column that is the less turn to the normal that is not the less
            }
            
            animationArray.push(currentCycleArray);     
        }     
        swap(arrayCopy, i, minIndex)

        //Order: Original Number, Minimun element, New size for i, New size for minimun size
        currentCycleArray = [i, minIndex, arrayCopy[minIndex], arrayCopy[i]]        //Update columns to match new position of the values.
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