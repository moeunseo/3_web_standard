let boxs = document.fruits.querySelectorAll("[type='checkbox']")

boxs[1].checked = true
boxs[3].checked = true

boxs.forEach((box) =>{
    if(box.checked === true){
        console.log(box.value)
    }
})

// 라디오 버튼 요소의 true를 준다
// 단, 한개만 체크할 수 있기에 마지막으로 true로 준 것에 체크가 되어있다.
let radios = document.foods.querySelectorAll("[type='radio']")
radios[1].checked = true
radios[3].checked = true
