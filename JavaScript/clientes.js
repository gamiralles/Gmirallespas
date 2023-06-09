function login() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  fetch("../clientes.json")
    .then((response) => response.json)
    .then((data) => {
      usuario = data.find((user) => user.usuario === username);
      console.log(usuario);
    })
    .catch((error) => {
      console.log(error);
    });
}

ingresar.addEventListener("click", () => {
  login();
});
