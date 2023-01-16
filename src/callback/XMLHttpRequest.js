// npm i xmlhttprequest -> Para poder ser llamado desde la consola con node src/callback/XMLHttpRequest.js
// API: https://fakeapi.platzi.com

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);   // Inicializa un XMLHttpRequest creado. (método, url, isAsync)
    xhttp.onreadystatechange = function (event) {
        // XMLHttpRequest.readyState:
        //  0   :   unsent (no se ha inicializado)
        //  1   :   opened (inicializado, no enviado)
        //  2   :   headers received (enviados los headers de petición)
        //  3   :   loading (recibiendo body de respuesta)
        //  4   :   done (respuesta recibida)
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {  // HTTP status code
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url);
                return callback(error, null);
            }
        } 
    }
    xhttp.send();
}

// Callback anindados: busca todos los productos, luego busca solo la información del primero (enviando su ID), luego busca el ID de la categoría de ese primer producto.
// Nota: Esto puede llevar a un callback hell (muchos callbacks anidados), esto se debe evitar.
fetchData(`${API}/products`, function(error1, data1) {  // data1 recibe todos los productos.
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {  // data2 recibe solo el producto en la posición 0.
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) { // data3 recibe la categoria con el id extraido en el data2
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});