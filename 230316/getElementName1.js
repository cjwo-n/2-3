// const title = document.querySelector("#title");
// const userName = document.querySelector("#desc p:first-child");
// //const userName = document.querySelector("#desc p");와 같은 의미
// //const userName = document.querySelector("#desc p:nth-child(1)");와 같은 의미
// const userAddress = document.querySelector("#desc p:nth-child(2)");
// const userTell = document.querySelector("#desc p:nth-child(3)");
// // const userTell = document.querySelector("#desc p:nth-child(3)");last-child와 같은의미

// //nth(n번째 자식 요소) n은 숫자 th의 의미로 보면 1th=1등이잖아 2th = 2등 이런 의미로 생각

// title.onclick = () => {
//   title.classList.toggle("clicked");
// };
// userName.onclick = () => {
//   userName.classList.toggle("blue-italic");
// };
// userAddress.onclick = () => {
//   userAddress.classList.toggle("blue-italic");
// };
// userTell.onclick = () => {
//   userTell.classList.toggle("blue-italic");
// };

//위와 같은 의미
// 메서드는 주어진 셀렉터에 해당하는 모든 요소를
// NodeList 객체로 변환합니다 여러개이기 때문에 반복문 사용

// const addresses = document.querySelectorAll("#desc p:nth-of-type(2)");
// querySelectorAll()

// for(let i = 0; i < addresses.length;i++){
//   addresses[i].onclick = () => {
//     addresses[i].classList.toggle("blue-italic")
//   };
// };

function onclick() {
  //change()함수의 기능은 변수 spanArray이다
  var spanArray = document.getElementsByTagName("span"); //
  for (var i = 0; i < spanArray.length; i++) {
    var span = spanArray[i];
    span.style.color = "#red" + i * 30;
    span.style.fontSize = "20px";
  }
}

// title 이라는 변수에는 HTML 문서에서 선택된 DOM 요소가 저장되어씨다
// onclick 속성 이벤트 핸들러 함수가 할당되고 있다
// 이벤트 핸들러 함수는 다음과 같은 동작
// title 클래스가 "clicked" 포함하지 않으면
// (if(!title.classList.contains("clicked"))),다음 동작수행
// title요소를 클릭하면 "clicked "추가하거나 제거하여 클릭한 상태로 토글

// toggle() - 특정 스타일 토글 특정 클래스를
//     추가하거나 삭제하기를 반복하는 경우 classList의 toggle()함수가 더편리
//     요소.classList.toggle(클래스명)
