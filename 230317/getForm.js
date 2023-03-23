const selectMenu = document.querySelector("#major");
//selectMenu 변수는 id값 major를 선택해 시행한다
function displaySelect(){
    //displaySelect 기능은 
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    // 변수 selectedText는 변수 selectMenu id major에 요소 options를 배열한다?
    // 배열값은 selectMenu에서 selected의 index 값이다 그 안에 text값
    alert(`[${selectedText}]를 선택했습니다`);
    //알림창 기능 
}
selectMenu.onchange = displaySelect;
let selectedText =selectMenu.options[selectMenu.selectedIndex].innerText;

// selectMenu는 select요소 참조
// selectMenu.options 는 select 요소의 모든 option 요소를 포함하는 배열
// selectMenu.selectedIndex는 사용자가 선택한 option의 인덱스를 반환
// 따라서 selectMenu.option[selectMen.selectedIndex] 는 사용자가 선택한 option 요소 참조
// .innerText 사용해 선택한 option 요소 택스트를 가져와 selectedText 변수 저장
// alert(`[${selectedText}]를 선택했습니다`)
