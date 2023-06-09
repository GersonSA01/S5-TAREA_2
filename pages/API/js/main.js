class apisimpsons{
  constructor() {
    this.listaPersonajes = document.querySelector("#listaPersonajes");
    this.botonesHeader = document.querySelectorAll(".btn-header");
    this.URL = "https://apisimpsons.fly.dev/api/personajes?limit=300&page=1";
    this.personajes = [];
  }

  iniciarAPI() {
    fetch(this.URL)
      .then((response) => response.json())
      .then((data) => {
        this.personajes = data.docs;
        this.mostrarPersonajes(this.personajes);
      });

    this.botonesHeader.forEach((boton) => {
      boton.addEventListener("click", () => {
        const estado = boton.id;

        if (estado === "verTodos") {
          this.mostrarPersonajes(this.personajes);
        } else {
          const personajesFiltrados = this.personajes.filter(
            (personaje) => personaje.Estado === estado
          );

          this.listaPersonajes.innerHTML = "";

          this.mostrarPersonajes(personajesFiltrados);
        }
      });
    });
  }

  mostrarPersonajes(personajes) {
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
          <p class="personaje-genero"><h1>Género</h1><br> ${personaje.Genero}</p>
        </div>
        <button class="btn btn-header ver">Ver más</button>
        <div class="detalle">
          <h4>Historia</h4>
          <p>${personaje.Historia}</p>
        </div>
      `;

      this.listaPersonajes.append(div);

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
}

const simpsons = new apisimpsons();
simpsons.iniciarAPI();
