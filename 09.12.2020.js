// Лекция 4. Массивы. Циклы по массиву
const arr = [4, 1, 5, -6, 0, 12, -7];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length-1]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// •	сумма элементов
const arr = [4, 1, 5, -6, 0, 12, -7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

// •	произведение элементов
const arr = [4, 1, 5, -6, 12, -7];
let product = 1;
for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
    // console.log(product);
}
console.log(product);

// •	сумма четных элементов
const arr = [4, 1, 5, -6, 12, -7];
let sumEven = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven = sumEven + arr[i] ;
    }
}
console.log(sumEven);

// •	количество нечетных элементов
const arr = [4, 1, 5, -6, 12, -7, 16, 14];
let count = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
        count++;//1+1+1
    }
}
console.log(count);

const arr = [4, 1, 5, -6, 12, -7, 16, 14];
let count = 0;
for (let el of arr){
    if(el % 2 !== 0){
        count++;
    }
}
console.log(count);

let str = 'hello';
// for (let i = 0; i < str.length; i++){
//   console.log(str[i]);
// }

for (let letter of str) {
    console.log(letter);
}

let arr = [1,2,3];
for (let el of arr){
    console.log(el);
}

// •    количество чисел в смешанном массиве
let arr = ['a', 12, true, -5, 'hello', [], {}];
//console.log(arr.length);
let count = 0;
for (let el of arr) {
    if (typeof el === 'number'){
        count++
    }
}
console.log(count);

// •	сумма элементов с четными индексами
let arr = [1, 3, 1, 0, 3, 2]
let sum = 0;
for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0) {
        sum = sum + arr[i];
    }
}
console.log(sum);

for (let i = 0; i < arr.length; i += 2){ //0,2,4
    sum = sum + arr[i];
}
console.log(sum);

// •	количество целых чисел массива
let arr = [2, 4.5, -6, 1.78, 9, 12];
let count = 0;
for (let element of arr) {
    if (element % 1 === 0) {
        count++;
    }
}
console.log(count);

// •	количество элементов, являющихся квадратами целых чисел
0, 1, 4, 9, 16...
    let arr = [12, 3, 0, 5, 16, 4, 9, 10];
let count = 0;
for (let el of arr) {
    if ((el ** 0.5) % 1 === 0) {
        //console.log(el);
        count++;
    }
}
console.log(count);

//  Заполнение массива:
//• получить массив [0,1,2,3,4,5,6,7,8,9,10]
let arr = [];
console.log(arr);
for (let i = 0; i <= 10; i++){
    arr[i] = i;
}
console.log(arr);

• получить массив [1,2,3,4,5,6,7,8,9,10]

let arr = [];
for (let x = 1; x <= 10; x++){
    arr.push(x);
}
console.log(arr);

//• получить массив [2, 4, 6, 8, 10]
let arr = [];
for (let x = 2; x <= 10; x+=2) {
    arr.push(x)
}
console.log(arr);

//• получить массив [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
let arr = [];
for (let x = 1; x <= 10; x++ ){
    if (x % 2 !== 0) {
        arr.push(-x);
    } else {
        arr.push(x);
    }
}
console.log(arr);

// Изменение массива:
// •	изменить знак всех элементов
let arr = [1,-2,-7, 34];
for (let i = 0; i < arr.length; i++){
    arr[i] = -arr[i];
}
console.log(arr);

let arr = [1,-2,-7, 34];  //не работает!!!!
for (let el of arr){
    el = -el;
}
console.log(arr);

// •    отрицательные элементы сделать положительными
let arr = [1, -2,-7, 34];
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        arr[i] = -arr[i];
    }
}
console.log(arr);

// •	четные возвести в квадрат, нечетные заменить нулем
let arr = [4, 8, 9, 3, 8];  //[16, 64, 0, 0, 64]
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
        arr[i] = arr[i] ** 2;
    } else {
        arr[i] = 0;
    }
}
console.log(arr);










