const a = 5;
const b = 6;

if (a == b) {
    console.log("a equal to b")
}
else {
    console.log("a not equal to b or c")
}

const marks = 50;
if (marks > 100) {
    console.log("input correct marks")
}
else if (marks >= 90 && marks <= 100) {
    console.log("Grade A")
}
else if (marks >= 80 && marks < 90) {
    console.log("Grade B")
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade C")
}
else if (marks >= 60 && marks < 70) {
    console.log("Grade D")
}
else if (marks >= 50 && marks < 60) {
    console.log("Grade E")
}
else {
    console.log("Grade F")
}