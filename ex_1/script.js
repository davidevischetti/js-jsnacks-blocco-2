//CREO UN ARRAY VUOTO
const myArr = [];

//CHIEDO ALL'UTENTE DEI NUMERI PER RIEMPIRE L'ARRAY
const sendNumber = document.getElementById('send');

let addNumber = 0;

sendNumber.addEventListener('click', 
function() {


 
    let myNumber = document.getElementById('number').value;

    myNumber = parseInt(myNumber);

    myArr.push(myNumber);

    addNumber +=(myNumber);

    if (addNumber + myNumber >= 50) {

        sendNumber.disabled = true;
    }

    console.log(myArr);
    console.log(addNumber);

});
