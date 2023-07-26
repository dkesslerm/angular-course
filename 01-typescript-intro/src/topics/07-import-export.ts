import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 200
    }
];

// Tax = 0.15
const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
})

console.log('Total', total);
console.log('Tax', tax);
