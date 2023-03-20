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
let sqlserver = document.getElementById("sqlserver");
crearBarra(sqlserver);

let gestionProyectos = document.getElementById("gestionProyectos");
crearBarra(gestionProyectos);

let git = document.getElementById("git");
crearBarra(git);

let tecnologi4 = document.getElementById("ofimatica");
crearBarra(ofimatica);

let linux = document.getElementById("linux");
crearBarra(linux);

let liderazgo = document.getElementById("liderazgo");
crearBarra(liderazgo);

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
    const intervalSqlserver = setInterval(function () {
      pintarBarra(sqlserver, 16, 0, intervalSqlserver);
    }, 100);

    const intervalGestionProyectos = setInterval(function () {
      pintarBarra(gestionProyectos, 12, 1, intervalGestionProyectos);
    }, 100);

    const intervalGit = setInterval(function () {
      pintarBarra(git, 12, 2, intervalGit);
    }, 100);

    const intervalOfimatica = setInterval(function () {
      pintarBarra(ofimatica, 12, 3, intervalOfimatica);
    }, 100);

    const intervalLinux = setInterval(function () {
      pintarBarra(linux, 8, 4, intervalLinux);
    }, 100);

    const intervalLiderazgo = setInterval(function () {
      pintarBarra(liderazgo, 6, 5, intervalLiderazgo);
    }, 100);
  }
}

//Se llena una barra particular con la cantidad indicada.
function pintarBarra(id_barra, cantidad, indice, interval) {
  // Obtener el valor de la variable CSS
  var color_primario = getComputedStyle(document.documentElement).getPropertyValue('--color-pintar-barra');

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