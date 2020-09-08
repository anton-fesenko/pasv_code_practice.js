//  Циклы. Урок 2.
//  Комбинирование циклов и условных операторов

//1. Вывести все символы строки по одному
let str = 'friendship';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//2. Вывести все символы строки по одному начиная с конца
let str = 'friend';
for (let i = str.length-1; i >= 0; i--) {
  console.log(str[i]);
}

//3. Подсчитать количество букв "w" в строке
let phrase = 'Gone With the wind';
let count = 0;
for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === 'w' || phrase[i] === 'W') {
    count += 1;
  }
}
console.log(count);

//4. Подсчитать количество гласных букв в строке
let str = 'GonE With the wInd';
str = str.toLowerCase();
console.log(str);
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'o' || str[i] === 'e' || str[i] === 'u' || str[i] === 'i' ) {
    count++;
  }
}
console.log(count);

//5. Получить строку из 50 букв "Z"
let s = '';
for (let x = 1; x <= 50; x++) {
  s = s + 'Z';
}
console.log(s);
console.log(s.length);

//6. "1 sheep... 2 sheep... 3 sheep... 30 sheep... "
let s = '';
let x = 1;
do {
  s = s + x + ' sheep... ';
  x++;
} while (x <= 30)
console.log(s);

//7. Создать массив [1,2,3,4,5,6,7,8,9,10]
let numbers = [];
for (let x = 1; x <= 10; x++) {
  numbers.push(x);
}
console.log(numbers);

//8. [2, 4, 6, 8, 10, 12,..., 30]
let nums = [];
for (let x = 2; x <= 30; x += 2) {
  nums.push(x)
}
console.log(nums);

let nums = [];
for (let x = 1; x <= 30; x++) {
  if (x % 2 === 0) {
    nums.push(x)
  }
}
console.log(nums);

//9. Количество четных элементов массива
let arr = [5,1,2,9,56,0,-4,9];
let count = 0;
for (let i = 0; i < arr.length; i++ ){
    if (arr[i] % 2 === 0) {
        count++
    }
}
console.log(count);
