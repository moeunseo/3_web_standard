// 요소 노드 생성
let el = document.createElement('div')
el.innerText='모은서'
document.body.appendChild(el)

// body안에 자식노드를 전부 가져온다.
let childNodes = document.body.childNodes
childNodes.forEach((node)=>{
    if(node.nodeName === 'A'){ // nodeName은 무조건 대문자 반환!
        node.parentNode.removeChild(node)
    }
})