let Name = document.getElementById('name')
let t_marks = document.getElementById('t_marks')
let o_marks = document.getElementById('o_marks')
let result = document.getElementById('result')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let tmarks = Number(t_marks.value)
    let omarks = Number(o_marks.value)
    if (omarks < tmarks) {
        let answer = Math.round((omarks / tmarks) * 100);
        result.innerHTML = (`Dear ${Name.value} you got ${answer}% marks`)
        t_marks.value = ''
        o_marks.value = ''
        Name.value = ''
    }
    else
        result.innerHTML = (`Obtain marks should be less then total marks`)
})