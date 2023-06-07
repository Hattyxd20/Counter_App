
const value=document.querySelector(".value");

const increment = () => {
    let currentValue=parseInt(value.innerText);
    currentValue+=1;
    value.innerText=currentValue;
}


const decrement = () => {
    let currentValue=parseInt(value.innerText);
    currentValue-=1;
    value.innerText=currentValue;
}

     
