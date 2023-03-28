const quotesURL = "http://dummyjson.com/quotes";
fetch(quotesURL)    //fetch 함수를 호출해 데이터를 가져오는 http 요청 보냄, quotesURL 변수에 저장된 url 주소
.then(response => response.json())  //서버에서 받은 응답(response) 객체의 내용을 json으로 파싱후 promise로 반환
.then(data => { //json데이터를 처리하는 z콜백함수 등록
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30); //0~29까지 수
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;   //result 요소 내에 class가 quote 찾고 해당 
    //요소의 내용data 객체체서 랜덤하게 설정
    result.querySelector(".author").innerHTML = `- ${data.quotes[random].author}`;    
})
.catch(error => console.log(error));


// "http://dummyjson.com/quotes" pathsms url 경로 path를 의미함
// dummyjson.com은 도메인을 의미함 이 말은 도메인은 호스트와 같은 의미르 가진다
// quotes는 이 url에서 path를 의미 
// path(경로)는 보통 서버에서 요청된 자원의 위치(locate)를 말하는 문자열

// url과 uri는 유사한 개념 url은 uri의 하위 개념
// uri는 uniform Resource Identifier 약자
// identifier는 식별자 특정 자원을 나타내기 위함

// uri는 url, urn으로 구분됨
// url은 특정 자원의 위치를 나타내며 urn은 특정 자원의 이름을 나타냄

// url은 인터넷 상의 특정 자원의 위치를 식별하기 위한 식별자
// uri는 하위 개념

// 반면
// uri는 프로토콜://도메인/경로 외에도 데이터 베이스 쿼리 문자열 이메일 주소 등의 다양한 형식으로 구성될수 있다