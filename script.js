const inputNumber = document.getElementById('inputNumber');
const inputNumber20 = document.getElementById('inputNumber20');
const result15 = document.querySelector('.result15');
const result20 = document.querySelector('.result20');
const button = document.querySelector('.btn');
const how = document.querySelector('.how')
const how20 = document.querySelector('.how20')

function calculateDiscount15() {
    const inputValue = inputNumber.value;
    const percent15 = (inputValue * 15 / 100).toFixed(0);
    const overall = inputValue - percent15;
    result15.innerHTML = `Со скидкой: <br>${overall} сом`;
    how.innerHTML = `(${percent15})`
}
function calculateDiscount20() {
    const inputValue = inputNumber20.value;
    const percent20 = (inputValue * 20 / 100).toFixed(0);
    const overall = inputValue - percent20;
    result20.innerHTML = `Со скидкой: <br>${overall} сом`;
    how20.innerHTML = `(${percent20})`
}

button.addEventListener('click', calculateDiscount15);
button.addEventListener('click', calculateDiscount20);

inputNumber.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculateDiscount15();
    }
});
inputNumber20.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculateDiscount20();
    }
});


// 


const somInput = document.getElementById('som')
const usdInput = document.getElementById('usd')
const cnyInput = document.getElementById('cny')

const converter = (input, target2, target3) => {
    input.oninput = () => {
        const xhr = new XMLHttpRequest
        xhr.open('GET', '/converter.json')
        xhr.setRequestHeader('Contetnt-type', 'applcation/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            const inputValue = input.value
            const inputId = input.id
            if (inputId === 'som') {
                target2.value = (inputValue / data.usd).toFixed(2)
                target3.value = (inputValue / data.cny).toFixed(2)
            } else if (inputId === 'usd') {
                target2.value = (inputValue * data.usd).toFixed(2)
                target3.value = (inputValue * data.usd / data.cny).toFixed(2)
            } else if (inputId === 'cny') {
                target2.value = (inputValue * data.cny).toFixed(2)
                target3.value = (inputValue * data.cny / data.usd).toFixed(2)
            }
            if (inputValue === '') {
                target2.value = ''
                target3.value = ''
            }
        }
    }
}
converter(somInput, usdInput, cnyInput)
converter(usdInput, somInput, cnyInput)
converter(cnyInput, somInput, usdInput)