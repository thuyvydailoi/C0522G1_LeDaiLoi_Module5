function fibonacci(index) {
    if (index == 0) {
        return 0;
    }
    if (index == 1) {
        return 1;
    }
    return (fibonacci(index - 1)) + (fibonacci(index - 2));
}
var size = 20;
var sum = 0;
var arr = [];
for (var i = 0; i < size; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(arr);
console.log(sum);
