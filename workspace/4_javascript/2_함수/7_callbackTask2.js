// 문제
let products = [
    {품목: '마우스', 가격: 50000, 수량:5},
    {품목: '키보드', 가격: 100000, 수량:3},
    {품목: '모니터', 가격: 250000, 수량:2},
    {품목: '노트북', 가격: 1550000, 수량:1}
]

// 함수를 정의
// 해당 배열을 전달하면 품목 객체를 새롭게 리턴 받아보자.
// 예시: 품목: 마우스, 총 가격: 250000
// 매개변수로 마우스와 callback함수를 전달받는 함수
// 콜백 -> 품목 이름이 넘어온 걸로 가격과 수량을 구해서 
// 두 수를 곱해서 리턴해주는 함수를 정의하자

function test(product, callback1){
    let priceSum = callback1(product)
    let result = {
        품목: product,
        총가격: priceSum
    }
    return result
}

function callbackTest(product){
    for(pro of products){
        if(pro.품목 == product){
            return pro.수량 * pro.가격
        }
    }
}
console.log(test('마우스', callbackTest))