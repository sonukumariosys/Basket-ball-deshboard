let countEl=document.getElementById("basket-1");

let incre=0;
function single(){
    incre+=1;
    countEl.innerText=incre;
}
function double(){
    incre+=2;
    countEl.innerText=incre;
}
function tripple(){
    incre+=3;
    countEl.innerText=incre;
}
function reset(){
    incre*=0;
    countEl.innerText=incre;
}
function back(){
    if(incre>0){
    incre-=1;
    countEl.innerText=incre;
    }
}


// for gest coding
let guestEl=document.getElementById("basket-2");
let increment=0;
function singlegest(){
    increment+=1;
    guestEl.innerText=increment;
}
function doublegest(){
    increment+=2;
    guestEl.innerText=increment;
}
function tripplegest(){
    increment+=3;
    guestEl.innerText=increment;
}
function resetgest(){
    increment*=0;
    guestEl.innerText=increment;
}
function backgest(){
    if(increment>0){
        increment-=1;
    guestEl.innerText=increment;
    }
}

