/*
Even Number Checker

Within the range of 1 to 100, print only the even numbers on the webpage.
While you print out the even numbers, there should not be any space between them.
*/

// for loop for 1 to 100
for (var i = 1; i <= 100; i++) {
  // if i is even
  if (i % 2 === 0) {
    // print i
    document.write(i);
  }
}