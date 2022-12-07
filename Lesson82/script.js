'use strict';

// json набор пар ключ - значение
// все строки должны быть в двойных кавычках

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parnets: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = (JSON.parse(JSON.stringify(persone)));

clone.parnets.mom = 'Angelika';
console.log(persone.parnets.mom);
console.log(clone.parnets.mom);
