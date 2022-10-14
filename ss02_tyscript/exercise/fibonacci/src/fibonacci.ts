function fibonacci(index: number):number {
    if (index == 0) {
        return 0;
    }
    if (index == 1) {
        return 1;
    }
    return (fibonacci(index -1)) +(fibonacci(index-2));
}

let size = 20;
let sum = 0;
let arr:Array<number> = [];
for (let i = 0; i < size; i++){
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(arr);
console.log(sum);