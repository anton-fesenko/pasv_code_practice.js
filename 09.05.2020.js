//Тема: “Кирпичики” программы
// Ваше имя и фамилия:

//1. Напишите функцию sum, которая принимает как аргументы два числа
//   и возвращает сумму этих чисел.
//   Выведите в консоль результат  работы функции для чисел 23 и 18.
function sum(a, b) {
    let summ = a + b;
    return summ
}
let result = sum(23, 18);
console.log( result );

//2. Напишите функцию с именем mult, которая принимает как аргументы два числа
//   и вычисляет произведение этих чисел.
//   Выведите в консоль результат работы функции для чисел 25 и 4.
function mult(a, b) {
    return a + b;
}
console.log(mult(25, 4));

//3. Напишите функцию multiply, которая принимает три числа
//   и возвращает их произведение.
//   Выведите в консоль результат работы функции для чисел: 2, 4, 7.
function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(2, 4, 7));

//4. Напишите функцию absValue, которая принимает значение числа и
//   возвращает абсолютное значение (модуль) этого числа.
//   Выведите в консоль результат работы функции для чисел: -10, 0, 10.
function absValue(a) {
    if (a < 0) {
        return -a
    }
    return a
}
console.log(absValue(-3));

//5. Напишите функцию distance, которая принимает два числа x,y
//   (координату точки на плоскости) и возвращает расстояние от этой точки до начала координат.
//   Найдите и выведите в консоль расстояние от начала координат до точки (3, 4).

//--------------------------------------------------------------------------------------------------------------

//Тема: Способы задания функций
// Ваше имя и фамилия:

//1. Напишите функцию, которая принимает число как аргумент и возвращает
//  противоположное по значению число. (1  => -1; -5 => 5; 0 => 0).
function num(a) {
    return -a;
}
console.log(num(0));

//2. Напишите функцию, которая принимает целое число как аргумент и возвращает
//  "Even" для четных чисел  или  "Odd" для нечетных чисел.
function isEven(a) {
    if (a % 2) {
        return 'Even';
    }
    return 'Odd';
}
console.log(isEven(3));

//3. Напишите функцию, которая принимает строку и возвращает первый символ строки.
function str(a) {
    return a[0];
}
console.log(str('Hello!'));

//4. Напишите функцию, которая принимает число и возвращает
//  его отрицательным. Если число уже отрицательное, то возвращается само число.
//  Если число равно 0, возвращается 0.
function number(a) {
    if (a < 0) {
        return a;
    }
    return -a
}
console.log(number(0));

function number(a) {
    return (a < 0)? a: -a; // тернарный оператор
}
console.log(number(-5));

//5. Напишите функцию, которая принимает число, трансформирует это число
//   в строку и возвращает эту строку.
function num(a) {
    a = a + '';
    a = String(a);
    return a;
}
console.log(num(5));
console.log(typeof num(5));