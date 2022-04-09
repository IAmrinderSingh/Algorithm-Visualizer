import {swap,bubbleSort} from "./bubbleSort.js"
import { randomList } from "./randomlist.js";

const bubble=document.querySelector("#bubble");
const length_arr=document.querySelector("#length_arr");
const max_value_arr=document.querySelector("#max_value");


bubble.addEventListener("click",()=>{
    const list=randomList(parseInt(length_arr.value),parseInt(max_value_arr.value));
    console.log(list)
})