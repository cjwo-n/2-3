1~3은 addEventListener 기능을 사용하여 button 

1. 익명함수 사용
const button = document.querySelector("button");
//변수 button은 문서 내 button 요소를 선택한다

// 익명함수
button.addEventListener("click", function(){ //익명함수는 function의 ()중괄호
    //button 요소(객체)에 새로운 이벤트를 추가한다, 클릭 했을때의 기능이 발생되고
    document.body.style.backgroundColor = "green";
    //문서 내 body 요소의 style은 back groundColor색상이 초록
});

이벤트 리스너란 이벤트가 발생했을 때 그 처리를 담당하는 함수

2. 화살표 함수사용
const button1 = document.querySelector("button");
//변수 button1은 문서 내 button 요소(객체)를 선택한다
//화살표 함수
button1.addEventListener("click", () => {
    //button1 요소에 새로운 이벤트 추가 한다 click 기능을 했을시 ()괄호 안에 실행
    document.body.style.backgroundColor = "green";
    //문서 내 body 요소의 style은 back groundColor색상이 초록
})

3. 함수선언식 사용으로 function changeBackGround()의 기능을 먼저 선언 후 button 변수 
function changeBackGround(){        
    //함수 선언식으로 changeBackGround가 먼저 선언되도 상관없음
    //함수 선언식 changeBackground의 기능
    document.body.style.backgroundColor = "green";
    //문서 내 body 요소의 style은 back groundColor색상이 초록
}
const button2 = document.querySelector("button");
button2.addEventListener("click", changeBackGround); 
//button2 요소의 새로운 이벤트는 click2 changeBackGround의 기능이 실행됨

4~5 onclick 기능 사용

4. onclick 기능에 익명함수를 선언 후 html 안에 body 태그에 있는 button에 구현
{/* <button onclick="alert('클릭');">클릭</button> 이것을 의미함 */}

const button3 = document.querySelector("button")

button3.onclick = function(){
    //button3의 onclick 기능은 익명함수 기능이 실현된다
    document.body.style.backgroundColor = "green";
}

5. 익명 함수 changeBackGround() 선언 이후
변수 값지정 (함수 선언식 사용)
function changeBackGround(){
    document.body.style.backgroundColor = "green";
}
const button4 = document.querySelector("button");
button4.onclick = changeBackGround(); 
