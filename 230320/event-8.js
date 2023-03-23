
//연습/

const checkbox1 = document.querySelector("#cap");
const checkbox2 = document.querySelector("#shoes");
const checkbox3 = document.querySelector("#bag");
const total = document.querySelector("#total");

checkbox1.onclick=function(){
    document.querySelector("form input checkbox:first-child").value; 
}
checkbox2.onclick=function(){
    document.querySelector("form input checkbox:nth-child(2)").value; 
}
checkbox3.onclick=function(){
    document.querySelector("form input checkbox:last-child").value; 
}

if(checkbox.checked)
    
    total.innerText = `${count}`