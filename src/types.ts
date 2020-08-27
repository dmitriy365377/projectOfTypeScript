

// Object

type primitiveTypes = boolean | number | string | symbol | null | undefined


const myObj: object = new Map()


// Void
function log(message: string): void {
    console.log(message)
    //return 'a string' // не можем вернуть строку так как стоит оператор void
}


// Array 
let array1: string[] = ['x','y']; // 1 способ указания типа массива
let array2: Array<string> = ['x','y']; // 2 способ использование дженериков Array<string>

// Tuple 
let tuple: [string, number] = ['str', 1]


// object

let obj: object | null

obj = {
    n: 1
};

console.log(obj);


let someString: any = 'Some string';

someString.length

let l: number = (<string>someString).length;
console.log(l)

// type assertions
