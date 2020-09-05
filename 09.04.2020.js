// Работа со строками. Циклы.

let str = 'monkeys';
console.log(str.length);
console.log(str[0]);
console.log(str[str.length - 1]);

let n1 = '12';
let n2 = '15';
let s = +n1 + +n2;
let s1 = Number(n1) + Number(n2);
console.log(s, s1);

let n = 123;
console.log(n + '');
console.log(String(n));

// 'tiger' ---> 't---r'
let s = 'Hello everyone!';
// console.log(s);
for (let i = 0, i < s.length; i++) {
    console.log(s[i]);
}

for (let x = -5; x <= 5; x++) { //2,3,4,5,6
    console.log('Hi');
}

let s = 'Hello everyone!';
for (let i = 0; i < s.length; i++) {
    if (s[i] === 'e') {
        count++
    }
}
console.log(count);

let s = 'Hello everyone!';
function countLetter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (s[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countLetter('I see you', 'e'));
console.log(countLetter(s, 'h'));
console.log(countLetter('We study js', 's'));

// 'tiger' ---> 't---r' // countDashes ==3
// 'moon' --> 'm--n' // countDashes == 2
let str = 'crocodile';
let length = str.length; //5
let countDashes = length - 2;
let strDash = '';
for (let x = 1; x <= countDashes; x++) {
    strDash = strDash + '-';
    console.log(strDash);
}
let code = str[0] + strDash + str[str.length-1];
console.log(code);

// '1 2 3 4 5 6 7 8 9 10'
let s = '';
for (let x = 1; x <= 10; x++) {
    if (x < 10) {
        s = s + x + ' ';
    } else {
        s = s + x;
    }
}
console.log(s);

// '1 sheep...2 sheep...3 sheep   30 sheep...'
let s = '';
let n = 30;
for (let i = 1; i <= n; i++) {
    s += i + ' sheep...';
}
console.log(s);

// 'Alice Moon' ---> 'A. M.'
// 'Mikky Mouse' ---> 'M. M.'
function name(str) {
    let index;
    for (let i = 0; i < str.length; i++){
        if (str [i] === ' ') {
            index = i;
        }
    }
    return str[0] + '.' + str[index+1] + '.';
}
console.log(name('Alice Moon'));