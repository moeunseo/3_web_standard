function printTest(){
    console.log('Hello world')
}

const temp1 = function(){
    console.log('Hello javascript')
}

const temp2 = function name(){
    console.log('Hello javascript')
}

// 한줄이라면 중괄호 없어도됨~
const temp3 = (num) => console.log(num)

printTest()
temp1()
//name() 에러!
temp2()
// 매개변수가 있는 함수에 인자를 보내지 않더라도 에러없이 실행!
// undefined가 출력된다
temp3()