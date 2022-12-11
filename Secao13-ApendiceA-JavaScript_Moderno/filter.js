
const arr = [1, 2, 3, 4, 5];

const hightNumbers = arr.filter((n) => {
    if (n >= 3) return n;
});

console.log(arr);
console.log(hightNumbers);

const users = [
    {
        name: 'Matheus',
        available: true
    },

    {
        name: 'Pedro',
        available: false
    },

    {
        name: 'João',
        available: false
    },

    {
        name: 'Marcos',
        available: true
    }
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);