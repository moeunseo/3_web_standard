// 이름과 나이가 제대로 입력되었는지 확인하는 함수
function check(event){
    // submit의 기능을 중지시킨다
    event.preventDefault() // 태그에 이미 있는 동작 중지

    // value로 폼 안에 입력된 값을 가져온다.
    let uname  = document.loginForm.uname.value
    let age  = document.loginForm.age.value
    let gender  = document.loginForm.gender.value

    console.log(uname)
    console.log(age)
    console.log(gender)

    // 유효성 검사
    if(uname === ''){
        alert('이름을 입력하세요!')
        document.loginForm.uname.focus()
        return false;
    }
    if(age === ''){
        alert('나이를 입력하세요!')
        document.loginForm.age.focus()
        return false;
    }

    alert('전송 완료')
    // 값이 제대로 들어갔는지 확인할 때 사용
    alert(uname)
    // 작성된 로그인폼 submit하는 함수
    document.loginForm.submit()
    return true;
}

// 콘솔창에서 진행
// 0번째는 남성이기때문에 전송버튼을 누르면 저절로 남성으로 지정돼서 넘어간다.
 // document.loginForm.gender.querySelectorAll('option')[0].selected = true;