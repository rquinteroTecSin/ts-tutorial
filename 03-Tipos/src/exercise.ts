let box;

console.log(typeof(box)); // undefined

box = "Hello World";
console.log(typeof(box)); // string

box = 1;
console.log(typeof(box)); // number

function getProduct(id) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 9.95
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

const showProduct = (name, price) => {
    console.log(`The product ${name} costs $${price}`);
}

const product2 = getProduct(1);
showProduct(product2.price, product2.name);

interface Product {
    id: number;
    name: string;
    price: number;
}

function getProduct2(id: number): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 9.95
    }
}

const product3 = getProduct2(1);
console.log(`The product ${product3.name} costs $${product3.price}`);

const showProduct2 = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}`);
}

const product4 = getProduct2(1);
showProduct2(product4.name, product4.price);