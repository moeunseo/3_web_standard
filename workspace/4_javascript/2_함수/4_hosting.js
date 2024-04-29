test()
function test(){
    console.log('이 함수... 호이스팅 되나?')
}

// test2() -> 함수가 아니라는 에러 발생
// console.log(test2) -> undefined
// 함수가 객체로 담기기 전에
// 변수가 호이스팅 됐을 뿐!
var test2 = function(){
    console.log('이 녀석은 될까?')
}