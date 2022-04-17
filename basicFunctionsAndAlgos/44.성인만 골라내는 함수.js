// Input: array
// Example input: { name: 문자열(이름), age: 숫자(나이) }

// Output: an array of only adult people. People must older than 20..
// Example output: ["문자열(이름)", "문자열(이름)", ...]

var inputA = [{
    name: "박태환",
    age: 35
}, {
    name: "유재석",
    age: 49
}, {
    name: "김강훈",
    age: 12
}, {
    name: "이지원",
    age: 15
}]

// Expected Output: ["박태환", "유재석"]


function getOnlyAdults(people) {
    let result = [];

    for (let i = 0; i < people.length; i++) {
        if (people[i].age >= 20) {
            result.push(people[i].name);
        }
    }
    console.log(result);
    return result;
}

getOnlyAdults(inputA);