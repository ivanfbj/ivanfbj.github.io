//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //Si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

//oculto el menu una vez que se selecciono una opcion
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  }
}

//Crear barras de las habilidades identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i < 20; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//seleccionar todas las barras generales para luego manipularlas.
let tecnologia1 = document.getElementById("tecnologia1");
crearBarra(tecnologia1);

let tecnologia2 = document.getElementById("tecnologia2");
crearBarra(tecnologia2);

let tecnologia3 = document.getElementById("tecnologia3");
crearBarra(tecnologia3);

let tecnologi4 = document.getElementById("tecnologia4");
crearBarra(tecnologia4);

let tecnologia5 = document.getElementById("tecnologia5");
crearBarra(tecnologia5);

let tecnologia6 = document.getElementById("tecnologia6");
crearBarra(tecnologia6);

//Guardar la cantidad de barras que se van a ir pintando por cada barra.
//Para eso se usa un arreglo, caad posicion pertenece a un elemento.
//comienza en -1 porque no tiene ninguna pintada al iniciarse.
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable se va a utilizar de bandera para saber si ya se ejecuto la animación.
let entro = false;

//función que aplica las animaciones de las habilidades.
function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalTecnologia1 = setInterval(function () {
      pintarBarra(tecnologia1, 2, 0, intervalTecnologia1);
    }, 100);

    const intervalTecnologia2 = setInterval(function () {
      pintarBarra(tecnologia2, 4, 1, intervalTecnologia2);
    }, 100);

    const intervalTecnologia3 = setInterval(function () {
      pintarBarra(tecnologia3, 6, 2, intervalTecnologia3);
    }, 100);

    const intervalTecnologia4 = setInterval(function () {
      pintarBarra(tecnologia4, 8, 3, intervalTecnologia4);
    }, 100);

    const intervalTecnologia5 = setInterval(function () {
      pintarBarra(tecnologia5, 10, 4, intervalTecnologia5);
    }, 100);

    const intervalTecnologia6 = setInterval(function () {
      pintarBarra(tecnologia6, 12, 5, intervalTecnologia6);
    }, 100);
  }
}

//Se llena una barra particular con la cantidad indicada.
function pintarBarra(id_barra, cantidad, indice, interval) {
  // Obtener el valor de la variable CSS
  var color_primario = getComputedStyle(document.documentElement).getPropertyValue('--color-primario');

  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName('e');
    elementos[x].style.backgroundColor = color_primario;
  } else {
    clearInterval(interval);
  }
}

//Se detecta el scrolling del mouse para aplicar la animación de la barra.
window.onscroll = function () {
  efectoHabilidades();
}