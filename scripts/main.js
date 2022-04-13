import {swap,bubbleSort} from "./bubbleSort.js"
import { generateArray ,list,max_value_arr,length_arr} from "./generateArray.js";
const bubble=document.querySelector("#bubble");
const newarray=document.querySelector("#newarray");
const algorithm=document.querySelector("#algorithm");

generateArray();

newarray.addEventListener("click",()=>{
    generateArray();
})

bubble.addEventListener("click",()=>{
    bubbleSort(list,length_arr);
})
