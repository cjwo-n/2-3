const container = document.querySelector("#container");
const pics = ["c:/media/1.png", "c:/media/2.png","c:/media/3.png","c:/media/4.png","c:/media/5.png"]; 
//이미지 배열
// 1 첫번쨰 이미지 기본
container.style.backgroundImage("c:/media/1.png");

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach(arrow =>{
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left"){
            i--;
            if(i < 0){
            i = pics.length -1;
            }
        }else if(e.target.id === "right"){
            i++;
            if(i >= pics.length){
            i=0;
            }
        }
        container.style.backgroundImage = `url(images/${pics[i]})`;
    });
});


arrows.forEach(arrow =>{
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left"){
            i = i === 0 ? pics.length -1 : i -1;
        }else if(e.target.id === "right"){
            i = (i + 1) % pics.length;
            console.log("새로운 인덱스 값 :",i);
        }
        container.style.backgroundImage = `url(images/${pics[i]})`;
    });
});

querySelectorAll
-querySelector와 사용 방법은 동일하며 선택자를 선택하여 배열과 비슷한 객체인 
nodeList를 반환합니다. 반환객체가 nodeList이기에 for문 또는 forEach문을 사용

.querySelectorAll()은 특정 CSS 선택자를 가진 모든 요소를 배열로 가져오는 메서드