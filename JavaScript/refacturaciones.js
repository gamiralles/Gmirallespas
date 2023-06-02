let cuota;
let aumento;
let san;
let sav;

function porcentaje() {
  san = document.getElementById("san").value;
  sav = document.getElementById("sav").value;
  cuota = document.getElementById("cuota").value;

  aumento = ((san - sav) / sav) * 100;
  return aumento
}

function refacturaciones() {
  let refa = document.getElementById("refas");
  let opc = document.createElement("div");
  opc.innerHTML = `  
          <div>
          <p>Buen dia, refactura la poliza del seguro te envio los nuevos valores.</p>
          <p>Suma Asegurada $ ${san}</h5>
          <p>Cuota $ ${cuota}</p>
  
          <p>El incremento de la suma asegurada es del ${aumento.toFixed(
            2
          )}% con respecto al trimestre pasado</p>
  
          <p>Si esta ok, refacturamos saludos.</p>
          </div>
          <br>`;
  refa.append(opc);
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  porcentaje();
  refacturaciones();
});

borrar.addEventListener("click", () => {
  location.reload();
});
