//
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number')
// localStorage.clear()

window.addEventListener('DOMContentLoaded', function () {
    let = checkbox = document.getElementById('rememberme')
    let change = document.getElementById('change')
    let form = document.getElementsByTagName('form')[0]
    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'green'
    }
    checkbox.addEventListener('click', function () {
        localStorage.setItem('isChecked', true)
    })

    change.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed')
        form.style.backgroundColor = 'green'

    })

    let person = {
        name: 'Alex',
        age:25,
        tech:['mobile', 'notebook']
    }

    let serealizePerson = JSON.stringify(person)
    localStorage.setItem('Alex', serealizePerson)

    console.log(JSON.parse(localStorage.getItem('Alex')));
})
