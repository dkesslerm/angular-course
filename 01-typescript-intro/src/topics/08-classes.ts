export class Person{
    // public name: string; 
    // private address: string;

    // Se ahorra poniendo las visibilidades en los parámetros 
    // del constructor
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = "No Address"
    ){}
}

// export class Hero extends Person{    // Con herencia

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }

// }

export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName, 'New York')
    }

}

const tony = new Person('Tony', 'Stark', "New York")
const ironMan = new Hero("Iron Man", 45, "Tony", tony);
console.log(ironMan);