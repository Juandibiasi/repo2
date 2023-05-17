const contador = document.querySelector('.contador');

function actualizarContador() {
  let fechaInicio = localStorage.getItem('fechaInicio');
  let fechaLimite;

  if (fechaInicio) {
    fechaLimite = new Date(fechaInicio).getTime() + (24 * 60 * 60 * 1000) + (1 * 60 * 60 * 1000);
  } else {
    fechaLimite = new Date().getTime() + (1 * 60 * 60 * 1000);
    localStorage.setItem('fechaInicio', new Date().toString());
  }

  let tiempoRestante;

  function calcularTiempoRestante() {
    tiempoRestante = fechaLimite - new Date().getTime();

    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    if (tiempoRestante > 0) {
      contador.style.display = 'block';
      contador.textContent = `Últimos cupos disponibles! ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    } else {
      contador.style.display = 'none';
      clearInterval(intervalo);
      localStorage.removeItem('fechaInicio');
    }
  }

  calcularTiempoRestante();

  const intervalo = setInterval(calcularTiempoRestante, 1000);
}

actualizarContador();

function mostrarSeccion(id) {
  var seccion = document.getElementById(id);
  seccion.classList.add('show');
}






