let likePizza = true;
const pizza =  new Promise((resolve, reject)=>{
    if(likePizza)
    resolve('피자 주문!')
    else
    reject("주문 안함")
});

pizza
.then(
    result => console.log(result)
)
.catch(
    err => console.log(err)
)
//아래 처럼 작성 가능
// pizza.then(
//     result => console.log(result),
//     err => console.log(err)
// )

// 프로미스의 상태
// 프로미는 resolve()함수나 reject() 함수를 매개변수로 받아서 실행하는
// 각 프로미스 객체는 resolve()함수나 reject() 함수를 실행하면서 상태가 바뀜
// pending 처음 프로미스를 만들면 대기상태가 됨 --객체 만들기 new
// fulfilled 처리에 성공하면 이행상태가 된--소then()
// rejected 처리에 성공하지 못하면 거부상태가 됨    --catch()