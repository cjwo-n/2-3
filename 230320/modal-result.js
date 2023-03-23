const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    modalBox.classList.toggle("active")
    //클릭하면 클래스리스트에 .active 스타일 추가
});
// 파란색 버튼을 클릭하면 모달 박스 열기
// 모달 박스에 있는 x 클릭시 모달 박스 닫기

// "active"
// addclass