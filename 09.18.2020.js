// Лекция 5. Работа с массивами:  Поиск максимума и минимума
//Вернуть первый отрицательный элемент
let arr = [34, 3, -5, 8, -9, 2];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    console.log(arr[i]);
    break;
  }
}

//Вернуть индекс первого отрицательного элемента
let arr = [34, 3, -5, 8, -9, 2];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    console.log(i);
    break;
  }
}

function indexOfNeg(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return i;
    }
  }
  return null
}

let arr = [34, 3, 5, 8, 9, 2];
console.log(indexOfNeg(arr));

// поменять местами два элемента массива
function swap(arr, n, m) {
  if (n >= 0 && n < arr.length && m >= 0 && m < arr.length) {
    let temp = arr[n];
    arr[n] = arr[m];
    arr[m] = temp;
    return arr;
  }
  return 'invalid index'
}

let arr = [3, 300, 5, 8, 900, 2];
console.log(swap(arr, 1, 4 ));

console.log(swap([3, 900, 5, 8, 300, 2], 1, 4));
console.log(swap([3, 300, 5, 8, 900, 2], 10, 4));

//поиск минимума
let arr = [7, 2, 4, -9, 10, 0, 15, -115];

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
}
console.log(min);

//поиск максимума
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(max);

let a = 90;
let b = 60;
let c = 12;
let min = Math.min(a, b, c);
console.log(min);
let max = Math.max(a, b, c);
console.log(max);

let arr = [7, 2, 4, -9, 10, 0, 15, -115];
let min = Math.min(arr); //NaN
console.log(min);

console.log(arr);
console.log(...arr); // spread operator
console.log(arr[0], arr[1], arr[2]);

let min = Math.min(...arr)
console.log(min);
let max = Math.max(...arr)
console.log(max);

let str = 'hello';
console.log(...str);
let arr = [...str];
console.log(arr);

//Соединить два массива в один
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9]
let arr = [...arr1, ...arr2];
console.log(arr);
let arrrr = arr1.concat(arr2);
console.log(arrrr);
let a = arr1 + arr2; //"1,2,34,5,6"
console.log(a);
let threeArray = arr1.concat(arr2, arr3);
console.log(threeArray);

// Найти сумму элементов массива за исключением
// наибольшего и наименьшего элементов (если таких элементов
// несколько, отнять одну и ту же величину только один раз).
let arr = [9, 1, 10, 1, 2, 5, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++){
  sum += arr[i]
}
console.log(sum - Math.max(...arr) - Math.min(...arr));

// Найти сумму элементов массива за исключением всех
// наибольших и наименьших элементов
let arr = [9, 1, 10, 1, 2, 5, 10];
let sum = 0;
let max = Math.max(...arr);
let min = Math.min(...arr);
for (let el of arr) {
  if (el !== max && el !== min) {
     sum += el;
  }
}
console.log(sum);

// Найти сумму элементов массива за исключением
// наибольшего и наименьшего элементов
function sumArray(arr){
  if (!!arr == false || arr.length === 0 ) return 0;
  if (!arr || arr.length === 0 ) return 0;
  let sum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let el of arr){
    sum += el;
  }
  return sum - max - min;
}
console.log(sumArray([9, 1, 10, 1, 2, 5, 10]));
console.log(sumArray([]));    // 0
console.log(sumArray(null));  // 0
console.log(sumArray(undefined));

let arr = []
let max = Math.max(...arr); //-Infinity
let min = Math.min(...arr);  //Infinity

console.log(max, min);
console.log(0 - max - min);  //NaN

console.log(!!null);
console.log(![]);

let arr = [];
console.log(!arr.length); //true

console.log(!0); //true
console.log(!null);
console.log(![0]);

console.log(!!null); //false
console.log(!null); //true
console.log(!undefined); //true

//Самое длинное слово в массиве
function theLongestWord(arr){
  let long = arr[0].length;      //6
  for (let i = 1; i < arr.length; i++){
    if (arr[i].length > long){
      long = arr[i]
    }
  }
  return long;
}

console.log(theLongestWord(["banana", 'kkkkkkkkiwi', 'apple', "mandarin"]));

function theLongestWord(arr){
  let long = '';
  for (let el of arr){
    if (el.length > long.length){
      long = el;
    }
  }
  return long;
}
console.log(theLongestWord(["banana", 'kiwi', 'apple', "mandarin", 'oooooooo']));

function theLongestWord(arr){
    let long = '';
    for (let el of arr){
        if (el > long){
            long = el;
        }
    }
    return long;
}
console.log(theLongestWord(["banana", 'kiwi', 'apple', 'w', "andarin"]));