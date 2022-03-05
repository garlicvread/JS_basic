/*
For each subject:
    1. If the score is less than 40 then the student is not qualified.
    2. If the average score is under 60 then the student is not qualified.

Thus if the score of each subject is the same or greater than 40
and the average score is the same or greater than 60,
then the student is qualified.

Print "pass" when the student is qualified,
otherwise print "fail".
*/

var scores = {
    "kor": 55,
    "math": 75,
    "eng": 50
}

// Check if the student is qualified with the given scores.
console.log(scores.kor);
console.log(scores.math);
console.log(scores.eng);


// Print the result on webpage.
if (scores.kor < 40 || scores.math < 40 || scores.eng < 40 || (scores.kor + scores.math + scores.eng) / 3 < 60) {
    document.write("fail");
} else {
    document.write("pass");
}
