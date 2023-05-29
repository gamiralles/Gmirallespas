let valorSeguro;
let coti;

class datosClientes {
  constructor(nombre, dni, fecha, telefono, email) {
    this.nombre = nombre;
    this.dni = dni;
    this.fechaNac = fecha;
    this.telefono = telefono;
    this.email = email;
  }
}

const gastonMiralles = new datosClientes(
  "Gaston Miralles",
  "38089331",
  "09/03/1994",
  "1154879865",
  "gmiralles@gseguros.com.ar"
);

const javierGonzalez = new datosClientes(
  "Javier Gonzalez",
  "38089332",
  "16/09/1993",
  "1154879866",
  "jgonzalez@gseguros.com.ar"
);

const martinMoscoloni = new datosClientes(
  "Martin Moscoloni",
  "38089333",
  "06/09/1993",
  "1154879864",
  "mfernandez@gseguros.com.ar"
);

const clientes = [];

clientes.push(gastonMiralles);
clientes.push(javierGonzalez);
clientes.push(martinMoscoloni);

const valorCotizacion = [];

function inicio() {
  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let fecha = document.getElementById("fechaNac").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let cliente = new datosClientes(nombre, dni, fecha, telefono, email);

  let sueldo = document.getElementById("sueldo").value;
  let alquiler = document.getElementById("alquiler").value;

  if (sueldo >= 200000) {
    valorSeguro = alquiler / 2;
  } else if (sueldo > 100000 && sueldo <= 150000) {
    valorSeguro = alquiler / 1.8;
  } else {
    valorSeguro = alquiler / 1.6;
  }

  valorCotizacion.unshift(valorSeguro);
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));
  localStorage.setItem("valorCotizaciones", JSON.stringify(valorCotizacion));

  let cotizacion = localStorage.getItem("valorCotizaciones");
  let valor = JSON.parse(cotizacion);
  coti = valor[0].toFixed(0);
  console.log(coti);
}

function cotizaciones() {
  let opciones = document.getElementById("cotizaciones");
  let opc = document.createElement("div");
  opc.innerHTML = `  
  <div class="cotizaciones">
  <h1>Cotizacion</h1>
  <br>
  <p>Valor de $ ${coti}</p>
  <br> 
  <h4>en 3 cuotas de</h4>
  <h4>$ ${(coti / 3).toFixed(0)}</h4>
  <br>
  <br>
  <input class="btn btn-primary" value="Contratar">
  </div>
  
  <div class="cotizaciones">
  <h1>Cotizacion</h1>
  <br>
  <p>Valor $ ${coti}</p>
  <br> 
  <h4>en 6 cuotas de </h4>
  <h4>$ ${(coti / 6).toFixed(0)}</h4>
  <br>
  <br>
  <input class="btn btn-primary" value="Contratar">
  </div>

  <div class="cotizaciones">
  <h1>Cotizacion</h1>
  <br>
  <p>Valor de $ ${coti}</p>
  <br> 
  <h4>en 12 cuotas de </h4>
  <h4>$ ${(coti / 12).toFixed(0)}</h4>
  <br>
  <br>
  <input class="btn btn-primary" value="Contratar">
  </div>
  `;
  opciones.append(opc);
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  inicio();
  cotizaciones();
  formulario.reset();
});

borrar.addEventListener("click", () => {
  location.reload();
});


