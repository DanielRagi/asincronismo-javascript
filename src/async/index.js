const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Async!'), 2000) 
            : reject(new Error('Error!'));
    });
}

const anotherFunction = async () => {
    const something = await asyncFunction();    // Espera la promesa.
    console.log(something);
}

console.log('Before');
anotherFunction();  // No bloquea el flujo, es una función asíncrona.
console.log('After');