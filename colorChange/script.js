const buttom=document.querySelector('#button');

const randomColor = ()=>{
    let val = "0123456789ABCDEF";
  let cons = "#";

  for(let i=0;i< 6;i++){
    cons=cons+val[Math.floor(Math.random()*16)]
  }
  return cons;
}
// function randomfun(){
//     document.body.style.background=randomColor();
// }

buttom.addEventListener("click",randomfun);
function randomfun(){
    document.body.style.background=randomColor();
}
