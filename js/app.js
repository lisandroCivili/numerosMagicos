const prueba = ()=>{
    startSection.className = 'd-none';
    gameSection.className = 'd-block';
}
const prueba2 = (e)=>{
    e.preventDefault();
    const inputNumber = document.getElementById('inputNumber');
    console.log(randomNumber);
    if (parseInt(inputNumber.value) > randomNumber) {
        alert("El numero secreto es MENOR");
    }else if(parseInt(inputNumber.value) < randomNumber){
        alert("El numero secreto es MAYOR");
    }else if(parseInt(inputNumber.value) === randomNumber){
        alert(`GANASTE el numero mágico es ${inputNumber.value}`);
    } 
}
const startSection = document.getElementById('startSection');
const gameSection = document.getElementById('gameSection');
const btnPlay = document.getElementById('btnPlay');
const formNumber = document.getElementById('formNumber');
const randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

formNumber.addEventListener('submit', prueba2);
btnPlay.addEventListener('click', prueba);
