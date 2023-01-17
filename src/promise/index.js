// Ejercicio: si hay más de 10 vacas, serán suficientes. Si son menos, no habrán suficientes.
const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if(cows > 10) {
        resolve(`Tenemos ${cows} vacas en la granja.`);
    } else {
        reject('No hay vacas suficientes');
    }
});

countCows
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log('Finally'));