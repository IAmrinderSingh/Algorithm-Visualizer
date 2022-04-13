'use strict'
const speed=500;
const list_style=document.querySelector(".list-style");
function swap(arr, xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function task(i,j,arr){
	setTimeout(()=>{
		if (arr[j] > arr[j+1])
		{
		const ele1=document.querySelector(`#A${j}`);
		const ele2=document.querySelector(`#A${j+1}`);
		ele1.setAttribute("style",`height:${arr[j+1]}px`);
		ele2.setAttribute("style",`height:${arr[j]}px`);
		swap(arr,j,j+1);
		}
	},speed*i)
}

// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{	
	for (j = 0; j < n-i-1; j++)
	{	
		task(i,j,arr);
	}
}
}

export{swap,bubbleSort};