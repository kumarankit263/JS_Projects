const inc= document.querySelector("#counter");
const clear = document.querySelector("#clr");
const range = document.querySelectorAll("input");
function increment(){
    let val=parseInt(inc.innerText);
    val=val+1;
    inc.innerText=val;
}

function decrement(){
    let val=parseInt(inc.innerText);
    val=val-1;
    inc.innerText=val;
}
function rangeIncrement(){
    if(range[0].value === ""){
        return alert("Give Any Number For Increment!");
      }
    inc.innerText=parseInt(inc.innerText)+parseInt(range[0].value);
    range[0].value = "";
}

function rangeDecrement(){
    if(range[1].value === ""){
        return alert("Give Any Number For Increment!");
      }
    inc.innerText=parseInt(inc.innerText)-parseInt(range[1].value);
    range[1].value = "";
}
clear.addEventListener('click',function(){
    inc.innerText=0;
})