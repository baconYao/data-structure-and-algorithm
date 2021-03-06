'use strict';

function myInsertionSort(arr) {
    /* 
     * parameters:
     *      arr: unsorted array
     * return:
     *      arr: sorted array   
     */
    const swap = (arr, idx1, idx2) => (
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    );
    let al = arr.length;
    for(let i = 1; i < al; i++) {
        for(let j = i ; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                swap(arr, j, j-1)
            } else {
                break;
            }
        }
    }

    return arr;
}

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for(var j = i - 1; j >=0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(myInsertionSort([5, 3, 4, 1, 2]));
console.log(myInsertionSort([50, 34, 13, 4, 10, 21, 49, 23]));

console.log(insertionSort([5, 3, 4, 1, 2]));
console.log(insertionSort([50, 34, 13, 4, 10, 21, 49, 23]));