/*
In the given array, the menus are listed in the order of [lunch, dinner, lunch, dinner, lunch, ...].
Print the lunch menus only on the screen.

1. Print the length of the array.
2. Using for loop, print every menu on the screen.
3. With the for loop you coded in step 2, print the lunch menus only on the screen.

Example output:
10
hamburger
curry
salad
ramen
gimbap
*/


var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]


// 1. Print the length of the array.
document.write(foods.length);


// Well, you do not have to do the second step. Let's just skip it.
// 3. With the for loop you coded in step 2, print the lunch menus only on the screen.
for (var i = 0; i < foods.length; i += 2) {
    document.write(foods[i] + "<br>");
}
