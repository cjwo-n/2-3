for (var i = 2; i < 10; i++) {
  document.write("<div>");
  document.write("<h3>" + i + "단<h3>");
  //첫번쨰 for문은 변수 i에 해당하는 구구단의 단수를 의미하고
  for (var k = 1; k < 10; k++) {
    document.write(`${i} x ${k} = ${i * k}<br>`);
  }
  //두번쨰 for문은 단 다음에 나오는 1~9까지의 변수 k
  document.write("</div>");
}
