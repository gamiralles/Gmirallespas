let nombre;
let sueldo;
let alquiler;
let indice;

do {
  nombre = prompt("Ingrese su nombre o bien escriba fin para finalizar.");
  if (nombre === "fin") break; // salir del ciclo si el usuario escribe "fin"
  
  sueldo = parseInt(prompt(`Bienvenido ${nombre}, ingrese su sueldo`));

  if (sueldo <= 100000) {
    indice = 1.6;
  } else if (sueldo > 100000 && sueldo <= 150000) {
    indice = 1.8;
  } else {
    indice = 2;
  }

  do {
    alquiler = parseInt(prompt("Ingresa el valor del alquiler mensual"));

    if (alquiler <= 0) {
      alert("El valor del alquiler debe ser mayor a cero. Por favor, ingrese un valor válido.");
    }
  } while (alquiler <= 0);

  function valorSeguro(alquiler, indice) {
    return alquiler / indice;
  }

  alert(`El valor del seguro es de: ${valorSeguro(alquiler, indice)} pesos anuales. Gracias`);

} while (nombre != "fin");


