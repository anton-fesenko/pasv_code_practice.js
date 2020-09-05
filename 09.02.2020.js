//Тема: Верное условие if и неверное else
//Ваши имя и фамилия:

//1. Задайте 2 переменные x и y, присвойте им значения 12 и 7
//  (значения могут меняться, ваш код должен работать правильно всегда!)
//  Найти и вывести в консоль большее из этих двух чисел.
let x = 12;
let y = 7;
if (x > y) {
    console.log(x);
} else {console.log(y);
}

//2. Задайте переменную a, присвойте ей произвольное значение.
//  Определите, является ли это значение четным.
let a = 15;
if (a % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//3. Задайте переменную age (возраст человека), присвойте ей произвольное значение.
//   Определите, является ли этот человек школьником
//  (школьником будем считать человека в возрасте от 5 до 18 лет включительно).
let age = 45;
if (age >= && age <= 18) {
    console.log('shkolnik');
} else {
    console.log('not shkolnik');
}

//4. Задайте переменную year, присвойте ей произвольное значение.
//   Определите, относится ли год к XXI веку
//   (XXI век начинается с 2001 года и заканчивается в 2100 году).
let year = 2110;
if (year >= 2001 && year <= 2100) {
    console.log('year belongs to XXI');
} else {
    console.log('doesnt belong to XXI');
}

//5. Задайте переменную  month, присвойте ей значение от 1 до 12.
//   Выведите в консоль название поры года (Winter, Spring, Summer, Fall).
let month = 10;
if (month === 3 || month === 4 || month === 5) {
    console.log('Spring');
} else if (month === 6 || month === 7 || month === 8) {
    console.log('Summer');
} else if (month === 7 || month === 8 || month === 9) {
    console.log('Fall');
} else if (month === 12 || month === 1 || month === 2) {
    console.log('Winter');
} else {
    console.log('not a month');
}

let month = 10;
if (month >= 3 && month <= 4) {
    console.log('Spring');
} else if (month >= 6 && month <= 8) {
    console.log('Summer');
} else if (month >= 9 && month <= 11) {
    console.log('Fall');
} else if (month === 12 || month === 1 || month === 2) {
    console.log('Winter');
} else {
    console.log('not a month');
}

//--------------------------------------------------------------------------------------------------------------

//Тема: Несколько условий if else
//Ваши имя и фамилия:

//1. Задайте переменную month (номер месяца), присвойте ей значение от 1 до 12.
//  Найдите и выведите в консоль количество дней в этом месяце для невисокосного года.
let month = 11;
if ((month >= 1 && month <= 7 && month % 2) || month === 7 || month === 8 || month === 10 || month === 12){
    console.log(31);
} else if (month === 4 || month === 6 || month === 9 || month === 11){
    console.log(30);
} else {
    console.log(28);
}

let month = 8;
if (month === 2){
    console.log('февраль');
} else if (month % 2){
    console.log('31 день');
} else {
    console.log('30 дней');
}

//2. Задайте переменную dayOfWeek (номер дня недели) (число от 1 до 7).
//  Определите, является этот день выходным днем или рабочим
// (выведите в консоль 'weekend' или 'work day')
let dayOfWeek = 6;
if (dayOfWeek === 6 && dayOfWeek === 7){
    console.log('Weekend');
} else {
    console.log('Work day');
}

//3. Задайте переменную age (возраст пассажира).
// Найдите стоимость завтрака на круизном пароме, если:
// стоимость завтрака для взрослых (18 лет и старше) составляет 10 евро,
// для подростков (12 – 17 лет) – 6 евро,
// для детей (6-11 лет) – 4 евро,
// для детей младше 6 лет – бесплатно.
let age = 'age';
if (age >= 18){
    console.log('10 euro');
} else if (age <= 17 && age >= 12){
    console.log('6 euro');
} else if (age <= 6 && age >= 11){
    console.log('4 euro');
} else if (age >= 0 && age < 6){
    console.log('free');
} else {
    console.log('Wron input');
}

//4.Задайте три переменных x, y, z и присвойте им произвольные значения.
//  Выведите в консоль максимальное значение.
// (пользоваться методами нельзя!, только if-else, и желательно - самый короткий способ)
let x = 7;
let y = 7;
let z = 10;
if (x >= y && x >= z){
    console.log('x',x);
} else if (y >= z && y >= x){
    console.log('y',y);
} else {
    console.log('z',z);
}

//--------------------------------------------------------------------------------------------------------------

//Тема: Тернарный оператор
//Ваши имя и фамилия:

//1. Задайте переменную x, присвойте ей произвольное значение.
//   Получите в переменной isPositive значение true, если x>0
//   и false, если x<=0 (используйте тернарный оператор)
let x = -20;
const isPositive = (x > 0)? true : false;
console.log(isPositive);

//2. Задайте переменную y, присвойте ей произвольное значение.
//   Получите в переменной isEven значение true, если y четное,
//   и false, если y нечетное (используйте тернарный оператор)
let y = 15;
let isEven = !(y % 2)? true : false;
console.log(isEven);

//3. Задайте переменную z, присвойте ей произвольное значение.
//   Получите в переменной isString значение true, если это строка,
//   и false в противном случае.
let z = 'fall';
console.log(typeof z);
let isString = (typeof z === 'string')? true : false;
console.log(isString);

//4. Задайте переменную a, присвойте ей произвольное числовое значение.
//   Получите в переменной absValue значение модуля этого числа.
let a = -50;
const absValue = (a < 0)? -a : a;
console.log(absValue);

//5. Задайте переменную number, присвойте ей произвольное числовое значение.
//   Если число четное, увеличьте его на 1, если нечетное - уменьшите его на 1.
//   Получите в переменной newNumber значение новое значение этого числа.
let number = 99;
const newNumber = (number % 2 === 0)? --number : ++number;
console.log(newNumber);