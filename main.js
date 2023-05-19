let numeroCliente;
let sueldo;
let alquiler;
let valorSeguro;

class datosClientes {
  constructor(nombre, edad, dni, telefono, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.telefono = telefono;
    this.email = email;
  }
}

const gastonMiralles = new datosClientes(
  "Gaston Miralles",
  "29",
  "38089331",
  "1154879865",
  "gmiralles@gseguros.com.ar"
);

const javierGonzalez = new datosClientes(
  "Javier Gonzalez",
  "31",
  "38089332",
  "1154879866",
  "jgonzalez@gseguros.com.ar"
);

const martinFernandez = new datosClientes(
  "Martin Fernandez",
  "25",
  "38089333",
  "1154879864",
  "mfernandez@gseguros.com.ar"
);

const arrayClientes = [];

arrayClientes.push(gastonMiralles);
arrayClientes.push(javierGonzalez);
arrayClientes.push(martinFernandez);

function numCliente() {
  numeroCliente = prompt(`Ingrese su dni:`);
  return numeroCliente;
}

function nuevoCliente() {
  let nombre = prompt("Ingrese su Nombre y Apellido:");
  let edad = parseInt(prompt("Ingrese su edad:"));
  let dni = numeroCliente;
  let telefono = parseInt(prompt("Ingrese su Telefono:"));
  let email = prompt("Ingrese su Email:");
  let cliente = new datosClientes(nombre, edad, dni, telefono, email);
  arrayClientes.push(cliente);
  console.log(arrayClientes);
}

function cotizador() {
  sueldo = parseInt(prompt("Por favor ingrese su remuneracion mensual."));
  alquiler = parseInt(
    prompt("Por favor ingrese el valor del alquiler mensual.")
  );

  if (sueldo >= 200000) {
    valorSeguro = alquiler / 2;
  } else if (sueldo > 100000 && sueldo <= 150000) {
    valorSeguro = alquiler / 1.8;
  } else {
    valorSeguro = alquiler / 1.6;
  }

  alert(`El valor del seguro es de $ ${valorSeguro} mensuales.`);
}

function inicio() {
  let respuesta;
  do {
    alert(`Bienvenido/a al cotizador de caución.`);
    numCliente();
    if (arrayClientes.some((cliente) => cliente.dni === numeroCliente)) {
      alert(`Usted ya es Cliente.`);
      cotizador();
      console.log(arrayClientes);
    } else {
      alert(`Por favor ingrese sus datos.`);
      nuevoCliente();
      alert(`Bienvenido a Gaston Miralles productor asesor de Seguros.`);      
      cotizador();
      console.log(arrayClientes);
    }
    respuesta = prompt(
      "¿Desea realizar otra cotización? si/no:"
    );
  } while (respuesta.toLowerCase() === "si");
}

inicio()
