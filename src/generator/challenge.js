// npm i node-fetch
// API: https://fakeapi.platzi.com (POST)

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

 const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* anotherFunction (urlApi) {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    yield console.log(products[0]);
    yield console.log(product.title);
    yield console.log(category.name);
}

const g = anotherFunction(API);
g.next();
g.next();
g.next();