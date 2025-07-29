/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


var age = 20;
var student = true;
if (age < 10) {
    console.log("You are a child so you get a free ticket");
}
else if (student) {
    console.log("You are a student so you get a 50% discount");
}
else if (age >= 60) {
    console.log("You are a senior so you get a 15% discount");
}
else {
    console.log("You have to pay the full price");
}