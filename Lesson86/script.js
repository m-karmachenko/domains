'use strict';

// promise

// console.log('Запрос данных...');

// setTimeout(()=>{
//     console.log('Подготовка данных...');
//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(()=>{
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);

// console.log('Запрос данных...');


// const req = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//         resolve(product);

//     }, 2000);
// });

// req.then((product) =>{
//     const req2 = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });

//     req2.then(data => {
//         console.log(data);
//     });

// });

// setTimeout(()=>{
//     product.status = 'order';
//     console.log(product);
// }, 2000);



console.log('Запрос данных...');


const req = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);

    }, 2000);
});

req.then((product) =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            product.status = 'order';
            reject();
        }, 2000);
    });

}).then(data => {
    data.modyfi = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(()=>{
    console.error('Произошла ошибка...');
});
