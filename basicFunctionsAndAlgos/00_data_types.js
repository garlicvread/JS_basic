// variable of js - 원시 타입

let age = 25;

console.log(age); // 25

age = 30;

console.log(age); // 30

let tall = 175.9; // js는 실수도 정수형과 구분 없이 그냥 숫자형으로 처리함.

console.log(age * tall);

let inf = Infinity; // 무한대, -무한대도 숫자형으로 처리함.

let minusinf = -Infinity;

let nan = NaN; // 연산이 잘못 수행되었을 경우 그 실패값으로 사용됨.

let name = "garlicvread"; // string

let name2 = `마늘빵`; // string

console.log(name2);

let name3 = `garlicvread ${name2}`; // 중요: 템플릿 리터럴 --> ${}

console.log(name3);

let isSwitchOff = false; // boolean

let a = null; //js에서는 null을 사용하기 위해 null을 먼저 입력해야 함.

console.log(a);

let variable_; //값을 할당하지 않으면 undefined 라는 값을 할당받음.

console.log(variable_);

// 자료형 변환

let numA = 2;
let numB = 12;

console.log(numA * numB);

let numC = "3"; //"3": string

console.log(numA * numC); //자동으로 자료형을 인지해서 숫자처럼 연산에 활용함: casting이라고 함(묵시적 형변환에 해당).

console.log(numA + numB);

console.log(numA + numC);

console.log(numA + parseInt(numC)); //parseInt(): 문자열을 정수형으로 변환. 명시적 형변환에 해당.
