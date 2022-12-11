
class Product {

    constructor(name, price) {
        
        this.name = name;
        this.price = price;
    };

    productWithDiscont(discont) {
      return this.price * ((100 - discont) / 100)  
    };

};

// 
class ProductWithAtributes extends Product {

    constructor(name, price, colors) {
        
        super(name, price);
        
        this.colors = colors;
    
    };

    showColors() {
      
        console.log('As cores são: ');
        
        this.colors.forEach((color) => {
            console.log(color);
        });

    };

};

const hat = new ProductWithAtributes('Chapeu', 29.49, [
   'Preto', 'Azul', 'Verde' 
]);

console.log(hat.name);
console.log(hat.productWithDiscont(30));
hat.showColors();