'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    //методы

    //собирет настройки, которые помогут в будущем сделать запрос.
    //request.open(method, url, async, login, password);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', () => {
        if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {inputUsd.textContent = 'Произошла ошибка';}
    });
    //status 
    //statusText
    //response
    //responseText
    //readyState






});