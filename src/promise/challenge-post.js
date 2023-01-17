// npm i node-fetch
// API: https://fakeapi.platzi.com (POST)

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(API, data) {
  const response = fetch(API, {         // Retorna un promise
    method: "POST",
    mode: "cors",
    credentials: "same-origin", // mismo que por defecto, opcional
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  "title": "Course - Fetch Post",
  "price": 10172,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
    .then(response => response.json())  // Transforma respuesta a JSON
    .then(data => console.log(data));   // Muestra respuesta