function order(coffee, callback){
    console.log(`${coffee}주문 접수`);
    setTimeout(()=>{
        callback(coffee);
    },3000);
}
function display(result){
    console.log(`${result}준비완료🐱‍🐉🐱‍🐉`);//window 키 + .
}
order("티라노~",display);   //display 함수를 콜백 함수로 전달 
//디버깅 확인

//1 order("아메리카노", display) 호출
//아메리카노 커피 주문을 접수하고 display 함수를 콜백으로 전달한다
//2 order()함수 실행됩니다
//3 order()함수 내부에서 console.log(${coffee}주문접수)를 실행하여
//4 order() 함수 내부에서 setTimeout(메서드 사용)
// 콜백함수 display()3초 후에 실행하도록 예약
//5 3초 대기후 display()함수 실행
//6 display()함수 내부에서 console.log(${result}준비 완료🐱‍🐉)를 실행해 아메리카노 준비 완료🐱‍🐉출력