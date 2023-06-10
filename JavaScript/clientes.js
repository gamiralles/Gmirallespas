function login() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  fetch("../clientes.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.find((user) => user.username === usuario && user.password === contraseña);
      if (user) {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: '',
          footer: '<a href=""></a>'
        })
        console.log("sesion iniciada correctamente");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Algo salio mal',
          text: '',
          footer: '<a href="">olvide mi contraseña</a>'
        })
        console.log("Usuario o contraseña incorrectos");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const ingresar = document.getElementById("ingresar");
ingresar.addEventListener("click", login);

