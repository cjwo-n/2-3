// fetch('http://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => console.log(users));
// fetch()함수를 사용해 jsonplaceholder에서 사용자 정보 가져온다
// 이전 단계에서 가져온 http 응답 객체(response)에서 데이터추출
// 해당 데이터 반환
// 이후 호출된 다음 .then()으로 json 데이터 사용
// 이전 단계에서 반환된 json 데이터 users 변수에 할당 콘솔 출력

async function init(){
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    display(users);
}

//await는 프로미스 체이닝을 쉽게 작성 async함수에서만 사용할수 있다
// async은 예약어를 함께 사용하면 그 함수 안에 있는 명령을 비동기적으로 실행 가능
// 프로미스 체이닝은 프로미스를 계속 연결해 사용하기 떄문에 콜백 지옥처럼 소스가 복잡해짐
// 이런 문제를 줄이기 위해 async 함수와 await 예약어 등장

function display(users){
    const result = document.querySelector("#result");
    let string = '';
    users.forEach((user)=>{ //각 사용자 정보를 html테이블 형태로 문자열 변환
    //      string += `<ul>
    //     <li>
    //         ${user.name}
    //     </li>
    //     <li>
    //         ${user.username}
    //     </li>
    //     <li>
    //         ${user.email}
    //     </li>
    // </ul>`
        string += `<table><tr><th>이름</th><td>${user.name}</td></tr>
        <tr><th>아이디</th><td>${user.username}</td></tr>
        <tr><th>이메일</th><td>${user.email}</td></tr>
        </table>`;
    });
    result.innerHTML = string;
}
init();

//await는 ecmascript 2017부터 추가된 키워드로 promise 사용하는
// 비동기 함수(async function)내에서 사용되며 해당 promise 처리될때까지
// 함수의 실행을 일시 정지합니다
// 이후 promise 처리되면 해당 결과를 반환하고 함수의 실행을 다시 시작합니다

// await 키워드를 사용 하면 비동기 처리의 결과를 동기적인 코드처럼  다룰 수 있기 떄문에
// 코드의 가독성을 높이고 개발자가 비동기 코드를 보다 쉽게 작성 가능합니다

// async function foo(){
//     const result = await someAsyncFunction();
//     console.log(result);
// }
// foo() 함수 내에서 await 키워드를 사용하여 someAsyncFunction()함수가 처리될때까지 함수의
// 실행을 일시 정지합니다 이후 someAsyncFunction() 함수가 처리되면해당 결과를 
// result 변수에 할당하고 이를 콘솔 출력
// await 키워드는 반드시 비동기 함수 내에서만 사용가능
// 일반적인 함수 내에서 사용 불가
// 따라서 await 키워드를 사용하기 ㅜ이해 먼저 함수르 async 함수 정의해야함