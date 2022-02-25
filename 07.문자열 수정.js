/*
Use splice to remove specific values from the words array and make it into an array like the one below.


[ 'i', 'have', 'a', 'pen', 'pineapple', 'apple', 'pen' ]


Use join() to concatenate lists based on spaces and store them as strings in the lyrics variable.
Print the lyrics.
Print the number of characters 'p' using the count() function.

Tips!
- You can use splice() to remove an element at a specific index.
  When written as splice(4, 2), it means to remove 2 elements from the 4th element.

- ARRAY.join() allows you to concatenate elements of an array into a string.
  By default, they are concatenated based on commas,
  but if you put ' ' in the parameter, they are concatenated based on spaces.

- Use match() and regular expressions to count the number of specific characters in a string.
  STRING.match(/p/g) gives you a list of p characters. The length of that list is the number of p characters.
*/

var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

words.splice(4, 2);
// console.log(words);

words.splice(5, 3);
console.log(words);

lyrics = words.join(' ');
console.log(lyrics);

console.log(lyrics.match(/p/g).length);
