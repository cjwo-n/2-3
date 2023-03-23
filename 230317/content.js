const title = document.querySelector("#title");
const userName = document.querySelector("#desc p:first-child");
const pfImage = document.querySelector("#profile img");

title.onclick = () =>
    title.innerText = "프로필"

userName.onclick = () =>
    userName.innerHTML="이름 : 민들레";

pfImage.onclick = () => 
    pfImage.src="c:/media/puppy.png";




