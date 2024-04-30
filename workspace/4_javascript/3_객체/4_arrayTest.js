// 콜백함수 활용
// 배열을 매개변수로 넘겨 받아,
// 최대값과 최소값을 출력해주는 함수
// 에러가 난 유무에 따라 콜백함수가 다르게 동작되게끔 구현할 예정
// 결과를 출력해주는 힘수가 콜백함수가 될 예정
let numbers = [1, 2, 3, 40, 100, 95, 27, 20]

function getMinMax(numbers, callback){
    if(numbers.length === 0){
        callback('배열의 개수 0개', null, null)
        return
    }

    let min = numbers[0]
    let max = numbers[0]

    for(let i=1;i<numbers.length;i++){
        if(numbers[i] < min){
            min = numbers[i]
        }

        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    callback(null, min, max)
}

function getResult(error, min, max){
    if(error){
        console.log(error)
    }
    else{
        console.log('최소값: ' + min)
        console.log('최대값: ' + max)
    }
}

getMinMax(numbers, getResult)
// 0을 넣으면 length를 가지고 있지 않기 때문에 undefined로 출력된다!
// 배열로 매개변수를 받기 때문에 [] <- 이 형식으로 보내야 한다.