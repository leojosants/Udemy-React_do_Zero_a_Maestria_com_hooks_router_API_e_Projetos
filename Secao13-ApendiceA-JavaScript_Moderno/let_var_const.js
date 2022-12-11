
// 1 - var, let e const

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log('x dentro: ', x);
}

console.log('x fora:', x);


// 


let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log('a dentro: ', a);
}

console.log('a fora: ', a);


//


let i = 90;

for (let i = 0; i < 5; i++) {
    console.log('i dentro: ', i);
    
}

console.log('i fora: ', i);


//


function logName() {
    const name = 'Leonardo';
    console.log(name);
};

const name = 'Leo';

logName();

console.log(name);