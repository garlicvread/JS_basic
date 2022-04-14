/*
Arrow Function

The arrow function can replace the function keyword with the => symbol.
For example, let's see a function that sums two parameters with the function keyword.


    var f1 = function sum(x, y) {
        return x + y;
    }

    console.log(f1(1, 2));

    var f2 = (x, y) => {
        return x + y;
    }

    console.log(f2(1, 2));


You can replace the above code written with the function keyword with the => symbol as below.


    var f2 = (x, y) => x + y;

    console.log(f2(1, 2));

*/

//The code below returns the length of each element in the array.
//Compare the code written with the function keyword and the arrow function.


const example = [
    'rabbit',
    'cheshire',
    'mad hatter',
    'heart queen'
];


/*
The code written with the function keyword.

console.log(example.map(function(e) {
    return e.length;
}));
*/


//The code written with the arrow function.
console.log(example.map(len_list => len_list.length));
