const result = document.querySelector("#result");
const student = "../js/student.json"

let xhr = new XMLHttpRequest();
xhr.open('GET',student, true);
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        let students = JSON.parse(xhr.responseText);
        console.log(students);
        result.innerHTML = 
        `<p>name : ${students.name}</p>
        <p>major : ${students.major}</p>
        <p>grade : ${students.grade}</p>`;
    }
}

// console.log 나 document.getElementById 나 대상 같으면 가능

// let xhr = new XMLHttpRequest();
// xhr.open('GET','../js/student.json', true);
// xhr.send();

// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4 && xhr.status === 200){
//         let student = JSON.parse(xhr.responseText);
//         document.getElementById('result').innerHTML =
//         `<h1>name : ${student.name}</h1>
//         <ul>
//             <li>major : ${student.major}</li>    
//             <li>grade : ${student.grade}</li>
//         </ul>`;
//     }
// }



// student.addEventListener("click", () => {
//     student.style
// })


// JSON 파일을 불러올때 왜 라이브 서버로 실행해야 하는 이유
// 보안 문제 때문이다 
// 웹 브라우저는 보안상의 이유로 로컬 시스템에서
// 직접적으로 외부 JSON 파일을 업로드하는 것을 제한함
// 따라서 웹 브라우저에서 로컬 파일 시스템에 접근할ㄸ꺠
// 보안산의 이유로 제한이 걸려 ajax 요청 등으로 외부 JSON 파일을 불러올 수 없다
// 라이브 서버로 실행하면 웹 브라우저가 로컬 파일 시스템에 접근하는 것이 아닌
// 웹 서버에 요청을 보내 JSON 파일을 받아올수 있기 떄문에 보안 문제 우회 가능