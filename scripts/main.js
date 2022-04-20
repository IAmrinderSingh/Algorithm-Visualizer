import {bubbleSort} from "./bubbleSort.js"
import { generateArray ,list,max_value_arr,length_arr} from "./generateArray.js";
import { mergeSort } from "./mergeSort.js";
const bubble=document.querySelector("#bubble");
const newarray=document.querySelector("#newarray");
const algorithm=document.querySelector("#algorithm");
const merge =document.querySelector('#merge');
generateArray();

newarray.addEventListener("click",()=>{
    generateArray();
})

bubble.addEventListener("click",()=>{
    bubbleSort();
})

merge.addEventListener("click",()=>{
    mergeSort(list,0,length_arr-1);
})