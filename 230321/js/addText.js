const orderInfo = document.querySelector("#orderInfo");     //주문 정보영역
const orderButton = document.querySelector("#order");       //주문하기 버튼
const title = document.querySelector("#container > h2");    //책 제목 요소

orderButton.addEventListener("click",() =>{
    //orderbutton 변수를 클릭했을떄 기능 추가
    let newP = document.createElement("p");     //새로운 p 요소 생성
    //변수 newP는 새로운 요소를 만들어 낸다(생성한다)(요소명은 <p>)
    let textNode = document.createTextNode(title.innerText);
    //textNode 변수는 선택한 요소에 텍스트를 추가한다 text 내용은 title.innerText
    //title(즉 id = title인  h2의 텍스트 부분만 가져와 텍스트 노드로 생성
    newP.appendChild(textNode);
    //변수 newP로 선택된 요소안에 자식요소를 추가한다 자식요소는 textNode 변수  
    newP.style.fontSize = "0.8em"
    //변수 newP의 속성값 
    newP.style.color = "blue"

    orderInfo.appendChild(newP);
    //orderInfo 의 자식요소는 newP이낟
}, {once: true});

const orderInfo = document.querySelector("#orderInfo");     //주문 정보영역
const orderButton = document.querySelector("#order");       //주문하기 버튼
const title = document.querySelector("#container > h2");    //책 제목 요소

let isOrdered = false;      //1번 false값선언    //4.

orderButton.addEventListener("click",() =>{
    if(!isOrdered){         //2번 true
    let newP = document.createElement("p");     //새로운 p 요소 생성
    //변수 newP는 새로운 요소를 만들어 낸다(생성한다)(요소명은 <p>)
    let textNode = document.createTextNode(title.innerText);
    //textNode 변수는 선택한 요소에 텍스트를 추가한다 text 내용은 title.innerText
    //title(즉 id = title인  h2의 텍스트 부분만 가져와 텍스트 노드로 생성
    newP.appendChild(textNode);
    //변수 newP로 선택된 요소안에 자식요소를 추가한다 자식요소는 textNode 변수  
    newP.style.fontSize = "0.8em"
    //변수 newP의 속성값 
    newP.style.color = "blue"
    newP.classList.add("bookTitle");
    orderInfo.appendChild(newP);
    //orderInfo 의 자식요소는 newP이낟
    }else{      //5
        const bookTitle = orderInfo.querySelector(".bookTitle");
        if(bookTitle){
            orderInfo.removeChild(bookTitle);
        }
    }
    isOrdered = !isOrdered;//3번      6
});

// 여기서의 구도
// 1.orderButton에 click 이벤트 추가
// 2.newP에 대한 선언과 요소 생성 기능 추가
// 3.textNode에 대한 선언 선택한 요소에 텍스트 추가 
// 4.newP에 자식 요소 추가 



// 요소 노드 만들기 - createElement(예 : "img" , "p", "div")
// let newImg = document.createElement("img")

// 속성 노드 만들기 - createAttribute(예 : 속성명 )
// document.createAttribute(속성명)
//     노드명.value = 속성값

//     속성 노드 연결 - setAttributeNode() 새로 만든 속성 노들르 요소 노드에 추가

//     setAttribute()와는 다른것
//     setAttribute(attributeName, attributeValue)
//     const div = document.createElement("div")
//     div.setAttribute("id", "myDiv")

//     자식 노드 연결 - appendChild()
//     img 요소에 속성 노드 연결되었지만 img 요소는 아직 dom에 연결되지 않은 상태
//     appendChild()를 사용해 img요소를 원하는 위치에 연결한다
//     예> document.body.appendChild(newImg)
//     기존 노드 앞에 노드를 첫번쨰 p 노드로 지정하고
//     insertBefore() 사용해 첫번째 p노드 앞에 새 노드 추가

//     노드 삭제 - remove() 요소.remove()
//     노드 삭제 -removeChild() 자식노드 삭제
//     우선 부모 노드를 찾고 진행해야됨

//     item.addEventListener("click", function (){
//         this.parentNode.removeChild(this);
//     });
//     이벤트 리스너에서 function(){...} this를 사용하면 this 이벤트가 발생한 노드 가리킴
//     예 - 첫번쨰 항목을 클릭하면 첫번째 li 요소가 this가 된다

        // 이벤트 리스너에서 화살표 함수를 사용할 경우 this는 최상위 객체 window 가리킴
        // 화살표 함수를 사용할 경우 클릭한 요소를 찾을떄 this 사용할 수 없다
        // 이


