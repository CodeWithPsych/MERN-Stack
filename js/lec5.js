let a = "     Arham Saleem     "
let b = "Ali "
let c = "hamza "

console.log(a.length)
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.slice(6, 12))
console.log(a.slice(1))
console.log(a.concat(b, c))
console.log(b.replace("Ali ", "Usman "))
console.log(a.trimStart())
console.log(a.trimEnd())
console.log(a.trim())

let elem=['chair','door','table']

elem.splice(1,0,'laptop','mouse')

console.log(elem)