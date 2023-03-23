const darkMode = document.querySelector("button");
// 여기서 button은 html에 있는 버튼 태그를 의미함 아까#은 id값이 있어서 쓴거

darkMode.onclick = () => {
  document.body.classList.toggle("dark");
};

if(darkMode = onclick){
    darkMode.onclick = () => {
  document.body.p.classList.toggle("contents");
};
};


// 변수명은 상관없네 생각해보니까 const 변수 아무거나 상관없고
// 변수 darkMode는  document.querySelector("button") 값을 선언하고

// darkmode를 클릭하면 기능이 발생하고
// body에 classList를 불러오는데 toggle 누를때마다 실현된다 css에 dark class를

// darkMode.onclick = () => {
//     document.body.classList.toggle("dark");
// }
