// const body = document.body;
// const result = document.querySelector("#result");


// body.addEventListener("keydown", (e)=>{
//     result.innerText = `code : ${e.code}, key : ${e.key} `;
// });


// const tttt = document.querySelector("#tttt");
// function tttt(){
//     tttt.addEventListener("keypress", (e) =>{

//     })
// }




// clPic.addEventListener("click", () =>{
//     clPic.style.opacity = 1;


//     let ppp = clPic.style.opacity;
    
//     if(ppp == 1){
//         const result = document.getElementById("#1234")
//         result.addEventListener("keydown", (e) =>{
//             let key = e.key
//             if(key == "t"){     //"t"는 키패드 t를의미
//                 ppp = 1;
//             }
//         })
//     }
// })
const pTag = document.querySelector("p");
const clPic = document.querySelector("img");
const body = document.body;

// var isNone = false;

pTag.addEventListener("click", () =>{
    clPic.style.opacity = 1;
    if(clPic.style.opacity == 1){
        body.addEventListener("keydown", (e) => {
            let key = e.key;
                if(key == "t","T"){
                    clPic.style.opacity = 0;
                    
                    // clPic.style.opacity == 0? clPic.style.opacity=0 : clPic.style.opacity=1;
                }
        })
    }
    // isNone != isNone; 
})
// if 하나 더 넣어서 ㅐopacity가 0일떄 다시 t누르면 1이되게
// clPic.addEventListener("keydown", (e) =>{
//     let key = e.key;
//     if(key == "t"){
//         clPic.style.display = "none";
//     }
// });

// result.addEventListener("keydown", (e) =>{
//     var t = e.key;
//     if(t == "t"){
//         clPic.style.opacity = 1;
//     }
// })

// -조건식 ? 실행문1 : 실행문2;
// 조건식이 참이면 실행문1 실행 , 거짓이면 실행문2가 실행
// var a = 10;
// var b = 3;
// var c = a>b ? a+'입니다' : b+'입니다';
// document.write(c);


// 클릭시 나타나고
// t를 누르면 사라지고 다시 누르면 나오는