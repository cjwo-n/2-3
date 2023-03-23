// function solution(n, m) {
//     let answer = [];
//     let minNum = Math.min(n, m);
//     let maxNum = Math.max(n, m);
//     answer[0] = gcd(minNum, maxNum);
//     answer[1] = lcm(minNum, maxNum);
//     return answer;
// }
// // 최대공약수
// function gcd(minNum, maxNum){
//   return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
// }

// function solution(n, m) {
//     const gcd =(a, b) => a % b === 0 ? b : gcd(b, a % b); //최대공약수
//     const lcm = (a, b) => a * b / gcd(a, b); // 최소 공배수
//     return [gcd(n, m), lcm(n, m)]
// }

// console.log(solution(3,12))
const n = document.querySelector("#number1")
const m = document.querySelector("#number2")
const button = document.querySelector("button")
let result = document.querySelector("#result")

button.onclick = function(){
    result.innerText = getGCD(n.value, m.value)
}

function getGCD(n, m) {
    let max = n>m ? n:m; //최대공약수
    let GCD =0;
    for(let i= 1; i<=max; i++){      //1부터 max까지 반복
        if(n % i === 0 && m % i===0 ) {//n과 m이 현재 숫자i로 나누어 떨어지는지 확인
         GCD = i;  //GCD에 업데이트 숫자i넣어준다
        }                         
    }
    return GCD;
}

function getLCD(n, m) {
    let min = n>m ? n:m; //최소공배수 하기
    let LCD =0;
    for(let i= 1; i>=min; i++){      //1부터 max까지 반복
        if(n * i === 0 && m * i===0 ) {//n과 m이 현재 숫자i로 나누어 떨어지는지 확인
         LCD = i;  //GCD에 업데이트 숫자i넣어준다
        }                         
    }
    return LCD;
}
// 함수는 두개의 인수 n,m 받아서 최대공약수를 찾는다
// 가장 큰 숫자를 찾아 max 변수에 저장
// for 반복문 사용해 1부터 max까지 반복
// 동시에 n,m이 현재 숫자 i 나누어 떨어지는 지 확인
// 만약 숫자 모두 현재 숫자 i 로 나누어 떨어지면
// 최대공약수 gcd 변수를 현재 숫자i로 업데이트
// 반복문이 끝나면 gcd최대공약수 반환