const boton = document.getElementById("botonIniciar");
const imagen = document.getElementById("rotar");
const body = document.body;

boton.onclick = function () {
  body.style.backgroundColor = "#ccc";
  imagen.style.display = "block";

  let rotacion = 0;
  setInterval(() => {
    rotacion += 10;
    imagen.style.transform = `rotate(${rotacion}deg)`;
  }, 100);

  boton.style.display = "none";
};
