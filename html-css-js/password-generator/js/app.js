const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const  generateEl = document.getElementById('generate');
const  copyEl = document.getElementById('copy');

const randomFunction = {
    lower: getRandomLowerLetters,
    upper: getRandomUpperLetters,
    number: getRandomNumbers,
    symbol: getRandomSymbols
};

//Copying the password
copyEl.addEventListener('click', () => {
    copyPassword(resultEl.innerText);
});
async function copyPassword(password) {
    try {
        await navigator.clipboard.writeText(password)
    } catch(error) {
        console.error("Error in copying text: ", err)
    }
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbol= symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length, );
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[0];
            generatedPassword += randomFunction[functionName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

// Generating Random uppercase and lowerase letters,
// numbers and symbols
function getRandomLowerLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpperLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols() {
   const symbols = ' !@#$%^&*(){}[]=<>/,. ';
   return symbols[Math.floor(Math.random() * symbols.length)]
}
