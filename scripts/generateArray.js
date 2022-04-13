'use strict'
import { randomList } from "./randomlist.js";
const length_arr=80;
const max_value_arr=780;
const array=document.querySelector("#array");
let list=randomList(length_arr,max_value_arr);

function displayArray(){
    array.innerHTML=""
    list.forEach((ele,index) => {
        const div=document.createElement("div");
        div.setAttribute("id",`A${index}`);
        div.setAttribute("class","list-style")
        div.setAttribute("style",`height:${ele}px`);
        array.appendChild(div);
    });    
}

function generateArray(){
    array.innerHTML="";
    list=randomList(length_arr,max_value_arr);
    displayArray();
}

export{generateArray,list,length_arr,max_value_arr,displayArray};