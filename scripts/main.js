import {bubbleSort} from "./bubbleSort.js"
import { generateArray ,list,length_arr} from "./generateArray.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import {disableButtons,enableButtons,bubble,merge,genrate_new_array,quick } from "./disable_enable_buttons.js";

generateArray();

genrate_new_array.addEventListener("click",()=>{
    generateArray();
})

bubble.addEventListener("click",async function(){
    disableButtons();
    await bubbleSort();
    enableButtons();
})

merge.addEventListener("click",async function(){
    disableButtons();
    await mergeSort(list,0,length_arr-1);
    enableButtons();
})

quick.addEventListener("click",async function(){
    disableButtons();
    await quickSort(list,0,length_arr-1);
    enableButtons();
})