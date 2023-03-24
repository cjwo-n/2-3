const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListener("click", () => { 
    let n = userNumber.value     //나오는 부분
    try{
        if(n === "" || isNaN(n)){
            throw "숫자를 입력하세요.";
            
        }
        n = Number(n)  //n=parseInt(n)
        if(n <= 10){
            document.querySelector("#result").innerText = n ;
            
        }if(n > 10){ 
            throw "10보다 작은수 입력하세요.";}
        } catch (err){
            alert(err);
        }finally {userNumber.value =""};
    
});