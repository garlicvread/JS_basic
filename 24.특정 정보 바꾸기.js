/*
Let's change the information of a student whose name is ann.

Find the student whose name is ann then change her major to "computer science".
After that, print the student's information on the webpage.

Example output:
john's major: business
anne's major: computer science
jennifer's major: visual design
*/


const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'anne',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
]

// Solution 1
// Find ann from the array "students" then change her major to "computer science".
students.find(students => students.name === 'anne').major = 'computer science'

// Print the student's information on the webpage.
document.write(students)



// // Solution 2
// for (let i = 0; i < students.length; i++) {
//     if (students[i].name === 'anne') {
//         students[i].major = 'computer science'
//     }
// }
//
// for (let i = 0; i < students.length; i++) {
//     document.write(`${students[i].name}'s major: ${students[i].major}<br>`)
// }
