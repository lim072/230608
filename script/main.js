// 1 list : 전체 list 의 첫번째, 마지막의 li 를 마지막, 첫번째로 보내면서
// 슬라이더가 순환하는 구조이기 때문에 list를 변수로 담아야한다

// 이 슬라이드의 순환구조는 nth-of-type을 그대로 살리고 (data-index를 사용하지 않음)
// append와 prepend를 사용해서 li를 붙이고 떼어주면서 순환하는 슬라이더입니다.

//처음에 배운 loop슬라이드의 원리는 nth-of-type의 순서를 가지지 않고 data-index를
//이용해서 고유한 스타일 유지한채로 슬라이더 dom구조를 변형시켜서 loop 슬라이더를 구현

//두번째로 배우는 loop 슬라이드의 원리는 nth-of-type의 순서를 그대로 둔채
//슬라이더 dom구조를 변형시켜서 loop슬라이더를 구현한 내용입니다

let list = document.querySelector('.list');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

//prev버튼을 클릭하면
//마지막의 슬라이드 li를 떼면서 list의 가장 앞붑문에 넣어줌으로
//전체 li를 순서를 밀어서 이전 슬라이드가 보이도록 합니다 =>
//결과적으로 prepend를 사용한다

prev.addEventListener('click', function () {
    list.prepend(list.lastElementChild);
    prev.classList.add("on")
    setTimeout(() => {
        prev.classList.remove("on")
    }, 500)
})


next.addEventListener('click', function () {
    list.append(list.firstElementChild)
    next.classList.add("on")
    setTimeout(() => {
        next.classList.remove("on")
    }, 500)
})

