const buttons=document.querySelectorAll('.button');
const body=document.querySelectorAll('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){
            body.style.backgroundColor = e.target.id;
        }
    });
});