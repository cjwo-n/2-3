const result = document.querySelector('#result');
const button = document.querySelector('button');

const luckyNumber = {
    digitCount:6,//6개 숫자
    maxNumber:45,//최대 45
};
// Math.floor() 함수를 사용해 소수점 이하를 버리고 정수 값 생성
// 이를 myNumber Set 객체 저장함
button.addEventListener("click", () =>{
    let{digitCount,maxNumber} = luckyNumber; //
    
    let myNumber = new Set(); //숫자가 중복되지 않게 저장할 set 생성
    for(let i = 0; i < digitCount; i++){
        myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
        while (myNumber.size < digitCount) {
            let number = Math.floor(Math.random() + maxNumber) +1;
            myNumber.add(number);
        }
    }
    result.innerText = `${[...myNumber]}`;
});
// let{digitCount,maxNumber} = luckyNumber; 한번더 한 이유는
// digitCount 와 maxNumber 프로퍼티를 추출하여
// 이를 digicount 변수와 maxNumber에 할당
// 생략하고 luckyNumber.digitCount 다른 방식으로 사용해도 돌아가지만
// 구조 분해 할당 문법을 사용해 코드를 더욱 간결하게 작성