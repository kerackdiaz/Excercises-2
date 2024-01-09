const change = document.getElementById('change');
const newDiv = document.createElement('div');
let bgColor = `bg-gray-500`;
let nameColor = 'Gray'
change.appendChild(newDiv);

newDiv.classList.add('h-[300px]', 'w-[200px]', 'border', 'flex', 'flex-col', 'justify-center', 'items-center', 'text-white');

newDiv.innerHTML = `
    <div id="bgDiv" class="${bgColor} h-1/4 w-full flex justify-center items-center">${nameColor}</div>
    <button class="border rounded-sm px-3 py-2 text-black">Change</button>
`;

const buttonChange = newDiv.querySelector('button');
buttonChange.addEventListener('click', function () {
    if (bgColor === `bg-gray-500`) {
        bgColor = `bg-blue-700`;
        nameColor = 'Blue'
    } else if (bgColor === `bg-blue-700`) {
        bgColor = `bg-red-700`;
        nameColor = 'Red'
    } else {
        bgColor = `bg-gray-500`
        nameColor = 'Gray'
    }

    const bgDiv = newDiv.querySelector('#bgDiv');
    bgDiv.className = `${bgColor} h-1/4 w-full flex justify-center items-center`;
    bgDiv.textContent = nameColor;
});




const divReset = document.getElementById('reset');
const newDivReset = document.createElement('div');
divReset.appendChild(newDivReset);

newDivReset.classList.add('h-[300px]', 'w-[200px]', 'border', 'flex', 'flex-col', 'justify-center', 'items-center', 'text-white',);

newDivReset.innerHTML = `
    <div class="flex flex-col gap-2">
    <div id="restDiv" class="bg-gray-500 h-24 w-full flex justify-center items-center">
    <p></p>
    </div>
    <input type="text" placeholder="write a any text" class="text-black">
    <button id="resetB" class="border rounded-sm px-3 py-2 text-black hidden">Reset</button>
    </div>
`;

const textInput = newDivReset.querySelector('input');
const resetB = document.getElementById('resetB');

textInput.addEventListener('input', function () {
    if (textInput.value.length > 0) {
        resetB.classList.remove('hidden');
        newDivReset.querySelector('#restDiv p').textContent = textInput.value;
    } else {
        resetB.classList.add('hidden');
        newDivReset.querySelector('#restDiv p').textContent = '';
    }
});

resetB.addEventListener('click', function () {
    textInput.value = '';
    resetB.classList.add('hidden');
    newDivReset.querySelector('#restDiv p').textContent = '';
});



const calculate = document.getElementById('calculate');
const newDivCal = document.createElement('div');
calculate.appendChild(newDivCal);
newDivCal.classList.add('h-[300px]', 'w-[600px]', 'border', 'flex', 'flex-col', 'justify-center', 'items-center');

newDivCal.innerHTML = `
    <div class="flex gap-2">
        <div id="cal" class="flex flex-col gap-2 border">
            <h1>Estatura</h1>
            <p>en centimetros</p>
            <input type="number" id="heigh" placeholder="173">
            <h1>Peso</h1>
            <p>en kilogramos</p>
            <input type="number" id="weight" placeholder="70">
            <button id="calResult" class="border rounded-sm px-3 py-2 text-black">Calcular</button>
        </div>
        <div id="result">
        <h1>Resultado</h1>
        <p>Su indice de masa corporal es</p>
        <span class="flex border rounded-sm py-2 w-60 justify-center"> <p id="resultado"> 0 </p></span>
        </div>
    </div>
`;

const heightValue = document.getElementById('heigh');
const weightValue = document.getElementById('weight');

function imc() {
    const height = parseFloat(heightValue.value) / 100;
    const weight = parseFloat(weightValue.value);

    if (height > 0 && weight > 0) {
        const imcTotal = weight / (height *2);
        return imcTotal.toFixed(2); 
    } else {
        return "Datos inválidos"; 
    }
}


const calculateButton = document.getElementById('calResult');
calculateButton.addEventListener('click', () => {
    const resultadoElement = document.querySelector('#resultado');
    resultadoElement.textContent = imc();
});



const divConvert = document.getElementById('convert');
const newDivConv = document.createElement('div');
divConvert.appendChild(newDivConv);
newDivConv.classList.add('h-[300px]', 'w-[600px]', 'border', 'flex', 'flex-col', 'justify-center', 'items-center');

newDivConv.innerHTML = `
<div class="flex flex-col gap-2 border">
    <h1>Pesos Colombianos</h1>
    <p>sin comas ni puntos</p>
    <input type="text" id="cop" placeholder="0">
    <h1>Dolares</h1>
    <p>sin comas ni puntos</p>
    <input type="text" id="usd" placeholder="0">
    <button id="conResult" class="border rounded-sm px-3 py-2 text-black">Convertir</button>
    <button id="resetButton" class="border rounded-sm px-3 py-2 text-black">Reiniciar</button> <!-- Cambiado a 'resetButton' -->
</div>

`;


const copInput = document.getElementById('cop');
const usdInput = document.getElementById('usd');
const convertButton = document.getElementById('conResult');
const resetButton = document.getElementById('resetButton');

let exchangeRate = 3500;

convertButton.addEventListener('click', () => {
    const copValue = parseFloat(copInput.value.replace(/,/g, '')); 
    const usdValue = parseFloat(usdInput.value.replace(/,/g, '')); 

    if (!isNaN(copValue) && copValue > 0) {
        const convertedUSD = copValue / exchangeRate;
        usdInput.value = convertedUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    } else if (!isNaN(usdValue) && usdValue > 0) {
        const convertedCOP = usdValue * exchangeRate;
        copInput.value = convertedCOP.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
});

resetButton.addEventListener('click', () => {
    copInput.value = '';
    usdInput.value = '';
});
