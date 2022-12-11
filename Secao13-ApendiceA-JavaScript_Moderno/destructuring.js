
const fruits = ['Maçã', 'Laranja', 'Mamão'];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
  
    name: 'Mouse',
    price: 45.00,
    category: 'Periféricos',
    color: 'Cinza'
    
};

const {

    name: productName,
    price,
    category: productCategory,
    color

} = productDetails;

console.log(`Nome do produto | valor R${price} | categoria ${productCategory} | cor: ${color}`);