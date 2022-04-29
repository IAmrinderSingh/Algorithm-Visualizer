'use strict'

import { bars, delay, time,green } from "./bubbleSort.js"

// Javascript implementation of QuickSort


// A utility function to swap two elements
function swap(arr, i, j) {
	bars[i].style.backgroundColor="darkmagenta";
	bars[j].style.backgroundColor="darkmagenta";
	let temp = arr[i];
	let tempbar_height=bars[i].style.height;
	bars[i].style.height=bars[j].style.height;
	bars[j].style.height=tempbar_height;
	arr[i] = arr[j];
	arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
async function partition(arr, low, high) {

	// pivot
	let pivot = arr[high];

	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {

		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot) {
			bars[j].style.backgroundColor="blue";
			bars[high].style.backgroundColor="blue"
			await delay(parseInt(time.value));
			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
			await delay(parseInt(time.value));
		}
		bars[j].style.backgroundColor="darkmagenta";
	}
	swap(arr, i + 1, high);
	await delay(parseInt(time.value));
	return (i + 1);
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
async function quickSort(arr, low, high) {
	if (low < high) {

		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = await partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		await quickSort(arr, low, pi - 1);
		await delay(parseInt(time.value));
		for(let i=low;i<=pi-1;i++){
			bars[i].style.backgroundColor=green;
		}
		await quickSort(arr, pi + 1, high);
		await delay(parseInt(time.value));
		for(let i=pi+1;i<=high;i++){
			bars[i].style.backgroundColor=green;
		}
		bars[pi].style.backgroundColor=green;
	}
}

export{quickSort};
