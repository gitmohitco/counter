const zero = document.getElementById('para');
const message = document.getElementById('message');
let count = 0;

function add(){
    if(count>=0 && count<25){
        count++;
        zero.textContent=count;
    }
    if(count%2==0){
        message.innerHTML="Even";
    }
    else if(count==0){
        message.innerHTML="Zero";
    }
    else message.innerHTML="Odd";
}
function reduce(){
    if(count>0){
        count--;
        zero.textContent=count;
    }
    if(count==0){
        message.innerHTML="Zero";
    }
    else if(count%2==0){
        message.innerHTML="Even";
    }
    else message.innerHTML="Odd";
}
function reset(){
    count=0
    zero.textContent=count
    if(count==0){
        message.innerHTML="Zero";
    }
}