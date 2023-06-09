const listaPersonajes = document.querySelector("#listaPersonajes");
const BotonesHeader = document.querySelectorAll(".btn-header");
const URL = "https://apisimpsons.fly.dev/api/personajes?limit=300&page=1";

let personajes = []; 

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    personajes = data.docs; 

    mostrarPersonajes(personajes); 
  });

BotonesHeader.forEach((boton) => {
  boton.addEventListener("click", () => {
    const estado = boton.id;

    if(estado=="verTodos"){
      mostrarPersonajes(personajes)
    }
    else{
      const personajesFiltrados = personajes.filter(
        (personaje) => personaje.Estado === estado
      );
  
      listaPersonajes.innerHTML = ""; 
  
      mostrarPersonajes(personajesFiltrados); 
    }

  });
});



function mostrarPersonajes(personajes) {
  personajes.forEach((personaje) => {
    const div = document.createElement("div");
    div.classList.add("tarjetitas");
    div.innerHTML = `
      <div class="img-personaje">
        <img src="${personaje.Imagen}" alt="${personaje.Nombre}" class="imagen">
        <h2 class="personaje-nombre">${personaje.Nombre}</h2>
      </div>
      <div class="info-personaje">
        <p class="personaje-ocupacion"><h1>Ocupación</h1><br> ${personaje.Ocupacion}</p>
        <p class="personaje-genero"><h1>Genero</h1><br> ${personaje.Genero}</p>
      </div>
      <button class="btn btn-header ver">Ver más</button>
      <div class="detalle">
        <h4>Historia</h4>
        <p>${personaje.Historia}</p>
      </div>
    `;

    listaPersonajes.append(div);

    const botonVerMas = div.querySelector(".ver");
    const infoAdicional = div.querySelector(".detalle");

    botonVerMas.addEventListener("click", () => {
      if (infoAdicional.style.display === "none") {
        infoAdicional.style.display = "block";
      } else {
        infoAdicional.style.display = "none";
      }
    });
  });
}

