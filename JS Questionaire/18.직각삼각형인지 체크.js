// function name: isRightTriangle

// Input: an array of 3 numbers
// Output: true or false

// Check if the three given numbers can be the sides of a right triangle.





function isRightTriangle(arr) {
    let result;

    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    // Check if the three given numbers can form a triangle
    // if they cannot form a triangle, return false
    // else, check if they can form a right triangle.

    if (a + b > c && a + c > b && b + c > a) {
        if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
            result = true;
        } else {
            console.log("not a right triangle");
            result = false;
        }
    } else {
        console.log("not a triangle");
        result = false;
    }
    console.log(result);
    return result;
}

    // if a^2 = b^2 + c^2, return true. Else, return false.
    // else if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
    //     result = true;
    // } else {
    //     result = false;
    // }
    // console.log(result);
    // return result;
// }


arr = [10, 3, 2];
isRightTriangle(arr);
