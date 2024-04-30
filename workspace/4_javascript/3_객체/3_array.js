let scores = [100, 80, 90, 50, 45, 49]
console.log(scores)

//push, pop
scores.push(500)
console.log(scores)

scores.pop()
console.log(scores)

// forEach
scores.forEach(scores => console.log(scores))
scores.forEach(function(scores){
    console.log(scores)
})

// filter
// 80이상인 친구들만 반환하여 배열 생성!
let aewsome = scores.filter(scores => scores >= 80)
console.log(aewsome)

// map
// 점수를 보고 등급으로 나누기
let grades = scores.map(getGrade)
console.log(grades)

function getGrade(scores){
    let result
    if(scores >= 90) result = 'A'
    else if(scores >= 70) result = 'B'
    else result = 'C'
    return result
}