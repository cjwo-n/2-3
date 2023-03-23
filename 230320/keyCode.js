const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e)=>{
    result.innerText = `code : ${e.code}, key : ${e.key} `;
});

// document.body를 body라는 변수에 저장합니다 웹 페이지의 본문을 나타냅니다
// body 요소에 "keyDown" 이벤트 리스너 추가
// keydown 이벤트가 발생하면 익명의 화살표 함수가 실행됩니다
// 함수 내에서 result.innerText를 변경하여 "result" 요소에 키보드 이벤트에 대한 정보를 출력
// e.code는 눌린 키의 코드를 e.key 는 눌린 키의 문자를 나타낸다
// e.code는 눌린 키의 코드를 e.key 는 눌린 키의 문자를 나타낸다

let numSet1 = new Set()
numSet1.add("one")
numSet1.add("two")
셋
배열은 키없이 여러 개의 값을 모아 놓은 것으로 값이 중복되도 상관없음
셋은 키 없이 여러 개의 값을 모아 놓은 것은 배열과 같지만 ,값은 중복되지 않는다