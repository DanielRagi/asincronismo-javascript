// npm i node-fetch
// API: https://fakeapi.platzi.com

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
    return fetch(url);  // fetch retorna una promesa
}

// Mostrar todos los productos:
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())  // Trae todos los objetos y los formatea en JSON
    .then(products => {
        console.log(products[0])
        return fetchData(`${API}/products/${products[0].id}`)   // Envía a obtener solo el primer producto
    })
    .then(response => response.json())  // Formatea ese producto en JSON
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)    // Envía a obtener la categoría de ese producto
    })
    .then(response => response.json())  // Formatea la categoría en JSON
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado'));