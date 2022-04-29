'use strict'
const time=document.querySelector("#time");
const bars=document.getElementsByClassName("list-style");
const green='#32a852';
// swaping height of bars
function swap(ele1,ele2)
{
	let temp=ele1.style.height;
	ele1.style.height=ele2.style.height;
	ele2.style.height=temp;
}

function delay(mili){
	return new Promise(resolve=>{
		setTimeout(()=>{resolve('')},mili);
	})
}
// An optimized version of Bubble Sort
async function bubbleSort()
{
	var i, j;
	for (i = 0; i < bars.length; i++)
	{	
		for (j = 0; j < bars.length-i-1; j++)
		{	
			if (parseInt(bars[j].style.height)> parseInt(bars[j+1].style.height))
			{	
				bars[j].style.backgroundColor="blue";
				bars[j+1].style.backgroundColor="blue";
				await delay(parseInt(time.value));
				swap(bars[j],bars[j+1]);
			}
			bars[j].style.backgroundColor="darkmagenta";
			bars[j+1].style.backgroundColor="darkmagenta";
		}
		bars[bars.length-1-i].style.backgroundColor=green;
	}
	bars[0].style.backgroundColor=green;	

}

export{bubbleSort,bars,delay,time,green};