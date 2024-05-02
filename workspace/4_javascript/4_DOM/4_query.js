// 선택자가 .container인 요소 하나를 가져온다.
// 제일 먼저 나오는 것만 가지고 나온다.
var element = document.querySelector('.container')
console.log(element)

// 모든 요소를 배열로 가져옴
var element = document.querySelectorAll('.container')
console.log(element)
console.log(element[0].children)

// 하위선택자를 사용한 모든 요소를 가져온다
var element = document.querySelectorAll('.container2 .text')
console.log(element)