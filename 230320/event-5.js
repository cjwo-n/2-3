
// const bttn = document.querySelector("#bttn");

// if(bttn !== null){      //없어도 됨
// bttn.addEventListener("click" , () => {
//     const word = document.querySelector("#word").value; //택스트 상자의 내용
//     const result =document.querySelector("#result");    //결괏값표시 영역
//     let count = word.length;        //문자열의 길이

//     // word.innerText = `${value}`
//     result.innerText = `${count}` //결과값 표시
    
// });
// };

const bttn1 = document.querySelector("#bttn");

bttn1.onclick = function(){
    const word= document.querySelector("#word").value; //택스트 상자의 내용
    const result =document.querySelector("#result");  

    let count = word.length;        //문자열의 길이

    // word.innerText = `${value}`
    result.innerText = `${count}` //결과값 표시
}