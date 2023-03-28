const pizza = ()=>{
return new Promise((resolve, )=>{
    resolve("피자 주문합니다");
});
};

const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject)=>{     //reject값은 없어도되고 실패했을경우를 나타낼때 reject를 선언해야된다
        setTimeout(()=>{
            resolve("피자 도우 준비");
        },3000);
    });
};
const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("토핑 완료");
        },1000);
    });
};
const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("피자 제작 완료");
        },1000);
    });
};

pizza()
.then((result) => step1(result))
.then((result) => step2(result))
.then((result) => step3(result))
.then((result) => console.log(result))
.then(()=>{
    console.log("피자 제작이 완료되었습니다")
})

// //pizza() 위와 같은 식(마지막 구문)
// .then(step1)
// .then(step2)
// .then(step3)
// .then(console.log)
// .then(()=>{
//     console.log("피자 제작 완료")
// })