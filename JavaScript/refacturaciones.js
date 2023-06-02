let savieja = document.getElementById("san").value;
let sanueva = document.getElementById("sav").value;
let aumento;
let cuota = document.getElementById("cuota").value;

function porcentaje(sanueva, savieja) {
  aumento = ((sanueva - savieja) / savieja) * 100;
  return aumento
}

function refacturaciones() {
  let refa = document.getElementById("refas");
  let opc = document.createElement("div");
  opc.innerHTML = `  
          <div>
          <p>Buen dia, refactura la poliza del seguro te envio los nuevos valores.</p>
          <p>Suma Asegurada $ ${savieja}</h5>
          <p>Cuota $ ${cuota}</p>
  
          <p>El incremento de la suma asegurada es del ${aumento.toFixed(
            2
          )}% con respecto al trimestre pasado</p>
  
          <p>Si esta ok, refacturamos saludos.</p>
          </div>`;
  refa.append(opc);
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  porcentaje();
  refacturaciones();
  
});
