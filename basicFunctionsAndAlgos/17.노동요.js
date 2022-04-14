/*
Work Song

With the given string, change the characters into other combination of characters.

Rules:
1. A space () --> "링디기디기" + line break
2. A periopd "." --> "딩딩딩" + line break
3. All other characters --> "링딩동" + space


Example input: 나는 베짱이.
Example output: 링딩동 링딩동 링디기디기
                링딩동 링딩동 링딩동 딩딩딩
*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  console.log(line.split('').map(char => {
    if (char === ' ') {
      return "링디기디기\n";
    } else if (char === '.') {
      return "딩딩딩\n";
    } else {
      return "링딩동 ";
    }
  }).join(''));
  rl.close();
});
