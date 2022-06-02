const name = document.querySelector('#name')
const email = document.querySelector('#email')
const button = document.querySelector('#button')

button.onclick = () => {

    console.log(email.value);
    localStorage.setItem('emaildata', email.value)
}