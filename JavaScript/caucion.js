let valorSeguro;
let coti;

//* Base de datos de clientes y cotizaciones

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

//* Funcion para cotizar, segun datos del cliente

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
  console.log(cliente);
  console.log(coti);
}

//* Funcion para mostrar las cotizaciones en pantalla

function cotizaciones() {
  let opciones = document.getElementById("cotizaciones");
  opciones.innerHTML = `  
  <div class="cotizaciones">
  <h1>Cotización</h1>
  <br>
  <p>Total anual de $ ${coti}</p>
  <br> 
  <h4>en 3 cuotas de $ ${(coti / 3).toFixed(0)}</h4>
  <br>
  <br>
  <br>
  <input class="btn btn-primary" value="contratar" id="contratar">
  </div>

  <div class="cotizaciones">
  <h1>Cotización</h1>
  <br>
  <p>Total anual $ ${coti}</p>
  <br> 
  <h4>en 6 cuotas de $ ${(coti / 6).toFixed(0)}</h4>
  <h6>mas 5% de recargo</h6>
  <br>
  <br>
  <input class="btn btn-primary" value="contratar" id="contratar2">
  </div>

  <div class="cotizaciones">
  <h1>Cotización</h1>
  <br>
  <p>Total anual de $ ${coti}</p>
  <br> 
  <h4>en 12 cuotas de $ ${(coti / 12).toFixed(0)}</h4>
  <h6>mas 10% de recargo</h6>
  <br>
  <br>
  <input class="btn btn-primary" value="contratar" id="contratar3">
  </div>
  `;

  let btn = document.getElementById("contratar");
  let btn2 = document.getElementById("contratar2");
  let btn3 = document.getElementById("contratar3");

  btn.addEventListener("click", () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Gracias por Elegirnos",
      showConfirmButton: false,
      timer: 2000,
    });
  });

  btn2.addEventListener("click", () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Gracias por Elegirnos",
      showConfirmButton: false,
      timer: 2000,
    });
  });

  btn3.addEventListener("click", () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Gracias por Elegirnos",
      showConfirmButton: false,
      timer: 2000,
    });
  });
}

const ctz = async () => {
  try {
    const response = await fetch("../../cotiFrecuentes.json");
    const data = await response.json();

    data.forEach((cotis) => {
      let frecuentes = document.getElementById("frecuentes");
      let cots = document.createElement("div");
      cots.innerHTML = `
      <div class="cotizaciones">
      <h5>${cotis.titulo}</h5>
      <h6>${cotis.tipo}</h6>
      <p>${cotis.valor}</p>
      <a href="../contacto.html">mas info</a>
      </div>
      `;
      frecuentes.append(cots);
    });
  } catch (error) {
    console.log(error);
  }
};

//* Evento asignado al formulario

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

ctz();
