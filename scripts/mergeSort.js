'use strict'

import{bars,delay,time} from "./bubbleSort.js"

async function merge(arr,beg,mid,end){
    var n1 = mid - beg + 1;
    var n2 = end - mid;

    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[beg + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = beg;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            bars[k].style.height=`${L[i]}px`;
            await delay(parseInt(time.value));
            i++;
        }
        else {
            arr[k] = R[j];
            bars[k].style.height=`${R[j]}px`;
            await delay(parseInt(time.value));
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        bars[k].style.height=`${L[i]}px`;
        await delay(parseInt(time.value));
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        bars[k].style.height=`${R[j]}px`;
        await delay(parseInt(time.value));
        j++;
        k++;
    }
}

async function mergeSort(arr,beg,end){
    if(beg>=end){
        return; //returns recursively
    }
    let mid=beg+parseInt((end-beg)/2);
    await mergeSort(arr,beg,mid);
    await mergeSort(arr,mid+1,end);
    await merge(arr,beg,mid,end);
}

export{mergeSort};