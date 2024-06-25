// for loop 
let i;
let y = 10;

for (i = 0; i <= y; i++) {
    console.log("I am a boy")
}

for (i = 1; i <= y; i++) {
    console.log(`2*${i}=` + (2 * i))
}


// while loop
let m = 0;
while (m <= 10) {
    console.log("I am a girl")
    m++;
}

// do while
do {
    console.log("I am a good girl")
    m++;
} while (m < 0);



// for of loop 
const str = "Arham"

for (const cap of str) {
    console.log(cap)
}

const numbers = [1, 2, 3, 4, 5]

for (const n of numbers) {
    console.log(n)
}


// for in loop 
for (const n in numbers) {
    console.log(n)
}

const obj = { a: 1, b: 2, c: 3, d: 4 }

for (const k of Object.keys(obj)) {
    console.log(obj[k])
}

const person = {
    Name: "Arham",
    age: 'Twenty',
    gender: 'Male'
}
for (const [key, value] of Object.entries(person)) {
    console.log(key + " : " + value)
}

for (const key in person) {
    console.log(key.toUpperCase() + " : " + person[key].toLowerCase())
}

