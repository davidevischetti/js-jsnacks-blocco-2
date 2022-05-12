// const myArr = [];

// let i = 0;
// while (i < 10) {

//     myArr.push(Math.floor(Math.random() * 100 + 1));
//     const newArr = [...new Set(myArr)];

//     i++;
// }

//     console.log(newArr[i]);


const myArr = [];

while (myArr.length < 10) {

    let number = Math.floor(Math.random() * 100 + 1);

    if(!myArr.includes(number)) {
        myArr.push(number);
    };

};

console.log(myArr);