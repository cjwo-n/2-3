// const addmyfragrance = document.querySelector("#mylist ul:first-child")
// //add my fragrance를 누르면 div 생성하고 그 div를 누르면 내 메모장 나옴

// addmyfragrance.addEventListener("click" , () =>{
   
// })
// function createDIV(){
//             var obj = document.getElementById("parent");    
//             var newDIV = document.createElement("div");
//             newDIV.innerHTML = "새로 생성된 DIV다";
//             newDIV.setAttribute("id", "myDiv");
//             newDIV.style.backgroundColor = "yellow";

//             newDIV.onclick = function(){
//                 var p = this.parentElement;
//                 p.removeChild(this);
//             };
//             obj.appendChild(newDIV);
//         }

// const open = document.querySelector("#open");
// const modalBox = document.querySelector("#modal-box");
// const close = document.querySelector("#close");

// new1.addEventListener("click", () =>{
//     modalBox.classList.toggle("active")
// })
const aldehydic = document.querySelector("#alde")
const modalBoxAl = document.querySelector("#modal-boxAl");
const closeAl = document.querySelector("#closeAl");


aldehydic.addEventListener("click", () =>{
    modalBoxAl.classList.toggle("active")
})
closeAl.addEventListener("click",()=> {
    modalBoxAl.classList.remove("active")
})
// closeAl.addEventListener("keydown",(e) =>{
//     var key=e.key;
//     if(key == " "){
//         modalBoxAl.classList.remove("active")
//     }
// })
// const mytxt =document.querySelector("#mytxt")

// mytxt.addEventListener("click",() =>{

// })

//--------------------------news 웹사이트 이동------------------------
const part1 = document.querySelector("#part1")

part1.addEventListener("click",() =>{
    window.location.href = "https://www.mk.co.kr/news/business/10668995"
})

const chanel = document.querySelector("#chanel")
chanel.addEventListener("click",() => {
    window.location.href="https://gift.kakao.com/page/14029?input_channel_id=2637"
})


//----------------------------news modal------------------------
const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    modalBox.classList.toggle("active")
    //클릭하면 클래스리스트에 .active 스타일 추가
});
close.addEventListener("click", () =>{
    modalBox.classList.remove("active")
})

const open2 = document.querySelector("#open2");
const modalBox2 = document.querySelector("#modal-box2");
const close2 = document.querySelector("#close2");

open2.addEventListener("click", () =>{
    modalBox2.classList.toggle("active")
    //클릭하면 클래스리스트에 .active 스타일 추가
});
close2.addEventListener("click", () =>{
    modalBox2.classList.remove("active")
})

// const parent = document.querySelector("#parent");
// const newChild = document.createElement("p");
// newChild.textContent = "세 번째 단락";
// parent.appendChild(newChild);