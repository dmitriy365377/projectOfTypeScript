// Function ()

function sum(a: number, b: number): number {
    return a + b;
}


function sumEveryThing(arg1: string, ...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num,0)
}