function cargarModelos() {
  let marca = document.getElementById("marcaMoto").value;
  let modelosSelect = document.getElementById("modeloMoto");
  modelosSelect.innerHTML = "";

  if (marca === "") {
    modelosSelect.innerHTML =
      "<option value=''>Selecciona una marca primero</option>";
  } else {
    switch (marca) {
      case "beta":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="RR 2T">RR 2T</option>
          <option value="RR 4T">RR 4T</option>
          <option value="XTRAINER">XTRAINER</option>
          <option value="Alp">Alp</option>
          <option value="Evo">Evo</option>
          `;
        break;
      case "bajaj":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="Pulsar NS 200">Pulsar NS 200</option>
          <option value="Dominar 400">Dominar 400</option>
          <option value="Avenger Street 160">Avenger Street 160</option>
          <option value="Rouser RS 200">Rouser RS 200</option>
          <option value="Platina 110 H-Gear">Platina 110 H-Gear</option>
          `;
        break;
      case "corven":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="Hunter 150">Hunter 150</option>
          <option value="Energy 110">Energy 110</option>
          <option value="Triax 150">Triax 150</option>
          <option value="Mirage 110">Mirage 110</option>
          <option value="Triax 150">Expert 150</option>
          `;
        break;
      case "guerrero":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="G110 Trip">G110 Trip</option>
          <option value="GXR 200">GXR 200</option>
          <option value="GXL 150">GXL 150</option>
          <option value="GRF 250">GRF 250</option>
          <option value="Trip Fun">Trip Fun</option>
          `;
        break;
      case "honda":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="CB Twister">CB Twister</option>
          <option value="CG150 Titan">CG150 Titan</option>
          <option value="XR150L">XR150L</option>
          <option value="CB190R">CB190R</option>
          <option value="CRF250 Ra">CRF250 Ra</option>
          `;
        break;
      case "kawasaki":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="Z400">Z400</option>
          <option value="Ninja 400">Ninja 400</option>
          <option value="Versys-X 300">Versys-X 300</option>
          <option value="Z650">Z650</option>
          <option value="Vulcan S">Vulcan S</option>
          `;
        break;
      case "ktm":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="Duke 200">Duke 200</option>
          <option value="RC 200">RC 200</option>
          <option value="Duke 390">Duke 390</option>
          <option value="RC 390">RC 390</option>
          <option value="390 Adventure">390 Adventure</option>
          `;
        break;
      case "motomel":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="Skua 150">Skua 150</option>
          <option value="S2 150">S2 150</option>
          <option value="X3M 125">X3M 125</option>
          <option value="Blitz 110">Blitz 110</option>
          <option value="B110">B110</option>
          `;
        break;
      case "yamaha":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="YBR 125">YBR 125</option>
          <option value="FZ16">FZ16</option>
          <option value="MT-03">MT-03</option>
          <option value="FZ25">FZ25</option>
          <option value="XTZ 250">XTZ 250</option>
          `;
        break;
      case "zanella":
        modelosSelect.innerHTML = `
          <option value="">Selecciona un modelo</option>
          <option value="ZB 110">ZB 110</option>
          <option value="RX 150">RX 150</option>
          <option value="Patagonian Eagle 150">Patagonian Eagle 150</option>
          <option value="RZ3 150">RZ3 150</option>
          <option value="Styler Cruiser 150">Styler Cruiser 150</option>
          `;
        break;
      default:
        modelosSelect.innerHTML = "<option value=''>Marca no válida</option>";
    }
  }
}
