export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'David'
}

const passenger2: Passenger = {
    name: 'Melissa', 
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);
} 

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);