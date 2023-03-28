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



// type of fragrance
//aldehyde note
const aldehydic = document.querySelector("#alde")
const modalBoxAl = document.querySelector("#modal-boxAl");
const closeAl = document.querySelector("#closeAl");


aldehydic.addEventListener("click", () =>{
    modalBoxAl.classList.toggle("active")
})
closeAl.addEventListener("click",()=> {
    modalBoxAl.classList.remove("active")
})
//citrus note
const citrus = document.querySelector("#citrus")
const modalBoxCit = document.querySelector("#modal-box-citrus");
const closeCitrus = document.querySelector("#close-citrus");


citrus.addEventListener("click", () =>{
    modalBoxCit.classList.toggle("active")
})
closeCitrus.addEventListener("click",()=> {
    modalBoxCit.classList.remove("active")
})
//floral note
const floral = document.querySelector("#floral")
const modalBoxFloral = document.querySelector("#modal-box-floral");
const closeFloral = document.querySelector("#close-floral");


floral.addEventListener("click", () =>{
    modalBoxFloral.classList.toggle("active")
})
closeFloral.addEventListener("click",()=> {
    modalBoxFloral.classList.remove("active")
})
//spicynote
const spicy = document.querySelector("#spicy")
const modalBoxSpicy = document.querySelector("#modal-box-spicy");
const closeSpicy = document.querySelector("#close-spicy");


spicy.addEventListener("click", () =>{
    modalBoxSpicy.classList.toggle("active")
})
closeSpicy.addEventListener("click",()=> {
    modalBoxSpicy.classList.remove("active")
})

//woody note
const woody = document.querySelector("#woody")
const modalBoxWoody = document.querySelector("#modal-box-woody");
const closeWoody = document.querySelector("#close-woody");


woody.addEventListener("click", () =>{
    modalBoxWoody.classList.toggle("active")
})
closeWoody.addEventListener("click",()=> {
    modalBoxWoody.classList.remove("active")
})
//animalic note
const animalic = document.querySelector("#animalic")
const modalBoxAnimal = document.querySelector("#modal-box-animalic");
const closeAnimal = document.querySelector("#close-animalic");


animalic.addEventListener("click", () =>{
    modalBoxAnimal.classList.toggle("active")
})
closeAnimal.addEventListener("click",()=> {
    modalBoxAnimal.classList.remove("active")
})

//oriental
const oriental = document.querySelector("#oriental")
const modalBoxOriental = document.querySelector("#modal-box-oriental");
const closeOriental = document.querySelector("#close-oriental");


oriental.addEventListener("click", () =>{
    modalBoxOriental.classList.toggle("active")
})
closeOriental.addEventListener("click",()=> {
    modalBoxOriental.classList.remove("active")
})

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

