const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'red') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'orange') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'cyan') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'magenta') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id
        }
    });
});