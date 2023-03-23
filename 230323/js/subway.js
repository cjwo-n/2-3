function* train(){
    yield "판교";
    yield "이메";
    yield "삼동";
    yield "경기광주";
    yield "초월";
    yield "곤지암";
    yield "신둔도예촌";
    yield "이천";
    yield "부밭";
    yield "세종대왕릉";
    yield "여주";
}
// 제너러이터 함수를 호출하여 gyenggang 이터레이터 객첼 생성
// 버튼 클릭 이벤트 발생할 떄마다  gyenggang 이터레이터 객체에서 다음 값 추출
let gyeonggang = train();

const button = document.querySelector("button")
const result = document.querySelector("#result")

button.addEventListener("click",()=>{
    let current = gyeonggang.next();    //다음값 추출
    if(current.done !== true){          //이터레이터 객체에서 아직 값이 남을경우에만 실행 
        result.innerHTML = current.value;
    } else {
        result.innerHTML = "중첩"
        button.setAttribute("disabled","disabled")
    }
})
// 제너레이터 함수는 function*키워드를 정의하면 함수 내부에서 yield키워드를 사용하여 값을 반환
// 제너레이터 함수는 function*키워드를 정의하면 함수 내부에서 yield키워드를 사용하여 값을 반환합니다 
// yield키워드는 해당 값을 반환하고 함수의 실행을 일시 중지함
// 그리고 다음 호출시 해당 위치부터 다시 시작해 이전에 중지된 지점까지 실행 제개

// 자바스크립트에서 기본적으로 제공하는 시스템 재아 ㅈ심볼을 사용할 수 있습니다
// 제너레이터 함수에서 Symbol.iterator를 사용할 경우
// 자바스크립트에서 기본으로 제공하는 내장 심볼을 사용 가능함
// Symbol.iterator 는 이터러블 객체를 생성랄떄 사용되는 내장 심볼로 
// 제너레이터 함수를 이ㅛㅇ해 이터레이터 객체를 생성하는 경우에 Symbol.iterator를 구현할 필요가 있다
// yield 키워드를사용해 값을 반환하면  이터레이터 객체 생성
