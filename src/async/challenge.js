// npm i node-fetch
// API: https://fakeapi.platzi.com (POST)

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const anotherFunction = async (url) => {
    try {
        const products = await fetchData(`${url}/products`);
        const product = await fetchData(`${url}/products/${products[0].id}`);
        const category = await fetchData(`${url}/categories/${product.category.id}`)

        console.log(products[0]);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);