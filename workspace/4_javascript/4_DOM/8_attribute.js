let aE1 = document.querySelector('a')
let href = aE1.getAttribute('href')

console.log(href)

// 실습
// 네이버 -> 네이버 지도로 변경
// href > https://map.naver.com/p?c=15.00,0,0,0,dh
// target -> _blank
aE1.innerText = '네이버지도'
aE1.setAttribute('href', 'https://map.naver.com/p?c=15.00,0,0,0,dh')
aE1.setAttribute('target', '_blank')

// 클래스 속성 조작도 가능하나, classList로 조작하자!
// 그 이유는 class는 하나만 삭제 불가능하기때문에. 