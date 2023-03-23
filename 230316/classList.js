// 처음 실행
// function change() {
//     var h1 = document.getElementById("title");
//     result.innerHTML =
//     "<style backGroundColor:yellow "
// }

// const title = document.querySelector("#title")
// title.onclick = () => {
//     title.classList.add("clicked");
// } 

title.onclick = () => {
    if(!title.classList.contains("clicked")){
        title.classList.add("clicked")
    } else {
        title.classList.remove("clicked")
    }
}

// title 이라는 변수에는 HTML 문서에서 선택된 DOM 요소가 저장되어씨다
// onclick 속성 이벤트 핸들러 함수가 할당되고 있다
// 이벤트 핸들러 함수는 다음과 같은 동작
// title 클래스가 "clicked" 포함하지 않으면
// (if(!title.classList.contains("clicked"))),다음 동작수행
// title요소를 클릭하면 "clicked "추가하거나 제거하여 클릭한 상태로 토글