/*
You are about to be given a string.
What you are going to do with this string is to search if the inputted string includes a certain substring.

For example, let's assume that you are given the Gettysburg address.
So, in this case, the string that to be inputted is:

"Four score and seven years ago our fathers brought forth on this continent,
a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
Now we are engaged in a great civil war, testing whether that nation,
or any nation so conceived and so dedicated, can long endure.
We are met on a great battlefield of that war.
We have come to dedicate a portion of that field,
as a final resting place for those who here gave their lives that that nation might live.
It is altogether fitting and proper that we should do this.
But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground.
The brave men, living and dead, who struggled here,
have consecrated it, far above our poor power to add or detract.
The world will little note, nor long remember what we say here,
but it can never forget what they did here.
It is for us the living, rather,
to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.
It is rather for us to be here dedicated to the great task remaining before us
-- that from these honored dead we take increased devotion to that cause
for which they gave the last full measure of devotion --
that we here highly resolve that these dead shall not have died in vain --
that this nation, under God, shall have a new birth of freedom --
and that government of the people, by the people, for the people, shall not perish from the earth."

You are now ready fo search a substring "people".
How many of "people" are there in the Gettysburg address?


When the substring you are going to search is "촉촉한 초코칩":

Example input 1: 난 안 촉촉한 초코칩보다 촉촉한 초코칩이 좋기 때문에 촉촉한 초코칩을 사 먹을 거야
Example output 1: 3

Example input 2: 안 촉촉한 초코칩 나라에 살던 안 촉촉한 초코칩이 촉촉한 초코칩 나라의 촉촉한 초코칩을 보고 촉촉한 초코칩이 되고 싶어서 촉촉한 초코칩 나라에 갔는데 촉촉한 초코칩 나라의 문지기가 "넌 촉촉한 초코칩이 아니고 안 촉촉한 초코칩이니까 안 촉촉한 초코칩 나라에서 살아"라고 해서 안 촉촉한 초코칩은 촉촉한 초코칩이 되는 것을 포기하고 안 촉촉한 초코칩 나라로 돌아갔다네
Example output 2: 13


Directions:
1. Receive a random length of string.
2. Search for a substring "촉촉한 초코칩" then return the number of "촉촉한 초코칩" in the string.


Notes:
1. You can use regex to solve this problem.
2. When if the match is 0, an error will occur, thus you need to use condition to check if the match is 0.
3. You can use STRING.includes(characters to check) to check if the substring (or character(s)) are in the string.
*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const str = line;
  const regex = /촉촉한 초코칩/g;
  const match = str.match(regex);
  if (match === null) {
    console.log(0);
  } else {
    console.log(match.length);
  }
  rl.close();
});
