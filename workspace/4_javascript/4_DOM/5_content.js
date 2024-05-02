// 웹 페이지에 나오던 말던 텍스트인 요소들만 들고온다.
console.log(document.getElementById('container').textContent)

// 화면에 표시되는 텍스트만 가지고 온다.
console.log(document.getElementById('container').innerText)

// 해당 노드의 컨텐츠 부분을 가지고 온다.
console.log(document.getElementById('container').innerHTML)

// 태그를 새로 추가하는 방식!
let content = `<p>새롭게 추가해준 p 태그</p>`
document.getElementById('container').innerHTML = content
//console.log(document.getElementById('container').innerHTML)