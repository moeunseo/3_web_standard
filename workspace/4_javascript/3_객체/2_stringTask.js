let user = {name: '모은서짱', 
            age: 20
}

//함수 1 정의
// 매개변수로 넘어온 객체의 이름과 나이를 출력하는 함수 정의
// 출력 예시
// 이름: 모은서(3)
// 나이: 20살
function printInfo(user, callback){
    let length = callback(user.name) // 이름 길이 반환
    console.log('이름: ' + user.name + '(' + length + ')')
    console.log('나이: ' + user.age + '살')
}

// 콜백함수 정의
// 이름을 전달받아 3글자면 3, 4글자면 4를 리턴!
function len(name){
    // 굳이 if문을 줄 필요는 없다! 왜냐? length 자체가 내장함수이기때문
    /* if(name.length == 3){
        return 3
    }
    else if(name.length == 4){
        return 4
    } */
    return name.length
}

printInfo(user, len)