function randomList(len,max){
    return Array.from({length:len},()=>Math.floor(Math.random()*max));
}

export{randomList};