const bubble=document.querySelector("#bubble");
const genrate_new_array=document.querySelector("#newarray");
const merge=document.querySelector("#merge");
const quick=document.querySelector("#quick");

function buttonsColor(color){
    bubble.style.color=color;
    genrate_new_array.style.color=color;
    merge.style.color=color;
    quick.style.color=color;
}

// disable all buttons
function disableButtons(){
    bubble.disabled=true;
    genrate_new_array.disabled=true;
    merge.disabled=true;
    quick.disabled=true;
    buttonsColor("red");
}

// enable all buttons
function enableButtons(){
    bubble.disabled=false;
    genrate_new_array.disabled=false;
    merge.disabled=false;
    quick.disabled=false;
    buttonsColor("black");
}

export{disableButtons,enableButtons,bubble,merge,genrate_new_array,quick};