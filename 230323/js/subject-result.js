const member1 = ["html", "css"];
const member2 = ["css", "자스", "리엑트"];
const member3 = ["자스", "타입스크립트"];

const subjects = [...member1, ...member2, ...member3];
//1

const resultList = new Set();
subjects.forEach(subject => {   //2
    resultList.add(subject);
});
//3
const result = document.querySelector("#result");
result.innerHTML = `<ul>${[...resultList].map(subject => `<li>${subject}</li>`).join("")}</ul>`;

// 1.console.log(subjects);
// 전개 연산자 spread operator를 사용해 subjects배열에 병합

// 2.subjects 배열은 중복을 포함한 모든 요소 포함

// 3.console.log(resultList)
// set 객체는 중복되는 요소를 허용안하므로
// 중복되는요소가 제거된 후 resultList변수에 저장