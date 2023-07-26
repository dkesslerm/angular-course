
interface Product{
    description: string;
    price: number;
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];

}

/******************************************************************************/

function taxCalculation(options: TaxCalculationOptions): [number, number]{

    const {products, tax} = options;
    
    let total = 0;

   products.forEach(product => {
        const {price} = product;
        total += price;
    });

    return [total, total * tax];
}

/******************************************************************************/


const phone: Product = 
{
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air', 
    price: 250.0
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total', total);
console.log('Tax', taxTotal);

export{};