//CREO UN ARRAY VUOTO
const myArr = [];

//CHIEDO ALL'UTENTE DEI NUMERI PER RIEMPIRE L'ARRAY
const sendNumber = document.getElementById('send');

sendNumber.addEventListener('click', 
function() {

    // let i = 0;
    // while (i < myArr.length) {
    //     let addNumber = 0;
    
    //     let myNumber = document.getElementById('number').value;
    
    //     myArr.push(myNumber);
    
    //     console.log(myArr);

    //     addNumber += parseInt(myArr[i]);

    //     if (addNumber > 50) {
            
    //     }
    //     console.log(parseInt(addNumber));
    // }

    do {

        let addNumber = 0;
        let myNumber = document.getElementById('number').value;
        myArr.push(myNumber);

        addNumber += parseInt(myNumber);

    } while (addNumber < 50)

});
