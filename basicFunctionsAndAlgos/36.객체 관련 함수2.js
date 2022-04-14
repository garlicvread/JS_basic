// Function makeIntroducingText
// Input: An array in form of {firstName: String, lastName: String, age: Number}
// Output: A string in form of "My name is {firstName} {lastName} and I'm {age} years old."

function makeIntroducingText(person) {
  return `My name is ${person.firstName} ${person.lastName} and I'm ${person.age} years old.`;
}

arr = {
    firstName: "John",
  lastName: "Doe",
  age: 32
};

document.writeln(makeIntroducingText(arr));
