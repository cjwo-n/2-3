const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
    alert(`이벤트 발생 ${e.pageX}, ${e.pageY}`);
});

// e의 page X, page Y 속성을 사용해 얻을 수 있다

// Java에서의 화살표함수(람다식)은 -> 표현
// javaScript에서의 화살표함수(람다식)은 => 표현

//이거 가능한지
const box2 =document.querySelector("#box");

box2.onclick= function(){
    alert (`이벤트 발생 ${pageX}, ${pageY}`)
}