// 배열
// 대괄호는 이용해서 선언, 자료형이 달라도 상관없다.
// 배열 안에 배열, 배열 안에 리터럴 등등
let user = ['eunseo', '12345', '모은서', 20, '서울시']
console.log(user[0])

// 객체 리터럴
// 중괄호를 이용해서 선언하며 key:value로 이루어져 있다.
let obj = {
    id: 'eunseo',
    pw: '1234',
    name: '모은서',
    age: 20,
    addr: '서울시'
}
console.log(obj)
console.log('나이: ' + obj.age)
console.log('나이: ' + obj['age'])

