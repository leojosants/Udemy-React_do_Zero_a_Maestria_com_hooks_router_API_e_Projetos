
class Product {

    constructor(name, price) {
        
        this.name = name;
        this.price = price;
    };

    productWithDiscont(discont) {
      return this.price * ((100 - discont) / 100)  
    };

};

const shirt = new Product('social', 34.90);

console.log(shirt);
console.log(shirt.name);
console.log(shirt.price);
console.log(shirt.productWithDiscont(3.90));