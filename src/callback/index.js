// Callback sincrónico
function saludar(nombre) {
  console.log("Hola " + nombre);
}

function despedir(nombre) {
  console.log("Adiós " + nombre);
}

function procesarEntrada(nombre, funcionCallback) {
  funcionCallback(nombre);
}

procesarEntrada("Daniel", saludar); // Hola Daniel
procesarEntrada("Daniel", despedir); // Adiós Daniel

// Callback asincrónico (setTimeOut llama a la función anónima)
setTimeout(function () {
  console.log("Hola JavaScript");
}, 5000);

// Callback asincrónico declarativo (setTimeOut pero sin función anónima)
function gretting(name) {
  console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, "Oscar");
