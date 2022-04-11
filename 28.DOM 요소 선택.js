// alert("Hello world!");


// HTML <div> 요소를 선택하는 코드
var selectedTagName = document.getElementsByTagName('div');

// 아이디가 “banana"인 요소를 선택하는 코드
var selectedId = document.getElementById('banana');

// 클래스가 "vegetable"인 모든 요소를 선택하는 코드
var selectedClassNameS = document.getElementsByClassName('vegetable'); 

// name 속성값이 "red"인 모든 요소를 선택하는 코드
var selectedNameS = document.getElementsByName('red'); 


// 선택된 요소 출력
document.write(selectedTagName);
document.write(selectedId);
document.write(selectedClassNameS);
document.write(selectedNameS);

// 출력값
// apple
// banana
// carrot
// onion
// [object HTMLCollection][object HTMLDivElement][object HTMLCollection][object NodeList]
