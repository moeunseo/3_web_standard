// var 키워드로 변수를 만들면 같은 이름으로 여러 개를 선언한 것처럼 보인다.
// 하지만 에러가 나지 않고 그냥 나중에 실행된 값으로 수정된다.
var data = 10;
console.log(data);

var data = 49;
console.log(data);

// 호이스팅
// 변수 선언을 스코프 가장 위로 올려 실행하는 것을 말함
// 에러가 아닌 undefined라는 값이 나옴 null이라고 생각
console.log(name)
var name = "모은서"

// 초기화하지 않고 변수 선언만 해도 undefined값이 출력
var test
console.log(test)

var nullTest = null;
console.log(nullTest);

// let 확인
//console.log(age) 호이스팅도 안됨!
let age = 22
//let age = 49 let으로는 변수 중복이라고 에러 발생!
console.log("나이: " + age)


