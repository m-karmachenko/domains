'use strict';


// Метода перебора массивов

// for each - Не возвращает новый массив!

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(item => item.length < 5);

// console.log(shortNames);

//map

// позволяет изменить исходный массив

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// every/some

// const some = [4, 'qwq', 'sldfjlksjgf'];

// console.log(some.some(item => typeof(item) === 'number'));

// const some = [4, 1, 9];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));


// reduce - схлопнуть массив

// const arr = [4, 5, 1, 3, 2, 6];
// //                       0  4
// //                       4  5
// //                       9  1
// //                       10  3
// //                       13  2
// //                       15  6
// //                       21
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => sum + ', ' + current);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);