const today = new Date();
const hrs = today.getHours();
const container = document.querySelector("#container");

let newImg = document.createElement("img")
newImg.src = (hrs < 12) ? "c:/media/mio.png" : "D:/html/230321/img/puppy.png";
container.appendChild(newImg);

// const toggleImage = document.querySelectorAll("#toggleImage")
// toggleImage.onclick = () =>{
//     toggleImage.removeEventListener("img")
// }

// const ad = addEventListener("click", function(){
//     document.body.img = newImg.removeEventListener("#toggleImage");
// })

// function newImg() {

// img.removeEventListener("click", newImg);
// }
function removeEvents() {
    this.el.removeEventListener("click", this.img.bind(this));
  }

// click하면 나오고
// t 키 패드를 눌렀을때 사라지고 나오고