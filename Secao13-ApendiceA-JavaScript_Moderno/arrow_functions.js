
const sum = function sum(a, b) {
    return a + b;
};


// Transformando em Arrow Function
const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

// 

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!';
    }
    else {
        return 'Olá!';
    }
};

console.log(greeting());
console.log(greeting('Leo'));


// Função sem argumento
const testeArrow = () => console.log('teste');
testeArrow();


// This
const user = {

    name: 'Theo',

    sayUserName() {

        var self = this;

        setTimeout(function () {
            console.log(self);
            console.log('Username: ' + self.name);
        }, 500)
    },

    // Transformando em Arrow
    sayUserNameArrow() {

        setTimeout(() => {
            console.log(this);
            console.log('Usarname: ' + this.name);
        }, 700)

    }

};

user.sayUserName();
user.sayUserNameArrow();