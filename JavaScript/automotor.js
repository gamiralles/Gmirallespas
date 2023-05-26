function cargarModelos() {
  let marca = document.getElementById("marcaAuto").value;
  let modelosSelect = document.getElementById("modeloAuto");
  modelosSelect.innerHTML = "";

  if (marca === "") {
    modelosSelect.innerHTML =
      "<option value=''>Selecciona una marca primero</option>";
  } else {
    switch (marca) {
      case "audi":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="A3">A3</option>
            <option value="A4">A4</option>
            <option value="Q5">Q5</option>
            <option value="Q7">Q7</option>
            <option value="TT">TT</option>
            `;
        break;
      case "bmw":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Serie 3">Serie 3</option>
            <option value="Serie 5">Serie 5</option>
            <option value="X3">X3</option>
            <option value="X5">X5</option>
            <option value="Z4">Z4</option>
        `;
        break;
      case "chevrolet":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Onix">Onix</option>
            <option value="Cruze">Cruze</option>
            <option value="Tracker">Tracker</option>
            <option value="Equinox">Equinox</option>
            <option value="Camaro">Camaro</option>
        `;
        break;
      case "citroën":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="C3">C3</option>
            <option value="C4 Cactus">C4 Cactus</option>
            <option value="Berlingo">Berlingo</option>
            <option value="C5 Aircross">C5 Aircross</option>
            <option value="Jumpy">Jumpy</option>
            `;
        break;
      case "fiat":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Cronos">Cronos</option>
            <option value="Argo">Argo</option>
            <option value="Toro">Toro</option>
            <option value="500">500</option>
            <option value="Ducato">Ducato</option>
            `;
        break;
      case "ford":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Fiesta">Fiesta</option>
            <option value="Focus">Focus</option>
            <option value="EcoSport">EcoSport</option>
            <option value="Ranger">Ranger</option>
            <option value="Mustang">Mustang</option>
            `;
        break;
      case "honda":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Civic">Civic</option>
            <option value="Accord">Accord</option>
            <option value="HR-V">HR-V</option>
            <option value="CR-V">CR-V</option>
            <option value="Odyssey">Odyssey</option>
            `;
        break;
      case "hyundai":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="HB20">HB20</option>
            <option value="Creta">Creta</option>
            <option value="Tucson">Tucson</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Elantra">Elantra</option>
            `;
        break;
      case "jeep":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Renegade">Renegade</option>
            <option value="Compass">Compass</option>
            <option value="Wrangler">Wrangler</option>
            <option value="Grand Cherokee">Grand Cherokee</option>
            <option value="Gladiator">Gladiator</option>
            `;
        break;
      case "kia":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Rio">Rio</option>
            <option value="Sportage">Sportage</option>
            <option value="Seltos">Seltos</option>
            <option value="Carnival">Carnival</option>
            <option value="Stinger">Stinger</option>
            `;
        break;
      case "mercedes-benz":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Clase A">Clase A</option>
            <option value="Clase C">Clase C</option>
            <option value="Clase E">Clase E</option>
            <option value="GLC">GLC</option>
            <option value="GLE">GLE</option>
            `;
        break;
      case "nissan":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="March">March</option>
            <option value="Versa">Versa</option>
            <option value="Sentra">Sentra</option>
            <option value="Kicks">Kicks</option>
            <option value="X-Trail">X-Trail</option>
            `;
        break;
      case "peugeot":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="208">208</option>
            <option value="308">308</option>
            <option value="2008">2008</option>
            <option value="3008">3008</option>
            <option value="Partner">Partner</option>
            `;
        break;
      case "renault":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Kwid">Kwid</option>
            <option value="Sandero">Sandero</option>
            <option value="Duster">Duster</option>
            <option value="Captur">Captur</option>
            <option value="Megane">Megane</option>
            `;
        break;
      case "toyota":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Corolla">Corolla</option>
            <option value="Hilux">Hilux</option>
            <option value="Yaris">Yaris</option>
            <option value="RAV4">RAV4</option>
            <option value="Camry">Camry</option>
            `;
        break;
      case "volkswagen":
        modelosSelect.innerHTML = `
            <option value="">Selecciona un modelo</option>
            <option value="Gol">Gol</option>
            <option value="Polo">Polo</option>
            <option value="Vento">Vento</option>
            <option value="Tiguan">Tiguan</option>
            <option value="Amarok">Amarok</option>
            `;
        break;

      default:
    }
  }
}
