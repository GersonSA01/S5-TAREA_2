
class Juego {
    constructor() {
      this.puntosUsuario = 0;
      this.puntosPC = 0;
      this.partidasGanadasJugador = 0;
      this.partidasGanadasComputadora = 0;
  
      this.instrucciones = document.querySelector("#instrucciones");
      this.contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
      this.contenedorPuntosPC = document.querySelector("#puntos-computadora");
      this.mensaje = document.querySelector("#mensaje");
      this.contenedorGanaPunto = document.querySelector("#gana-punto");
      this.elegiTuArma = document.querySelector("#elegi-tu-arma");
  
      this.contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
      this.contenedorEleccionPC = document.querySelector("#eleccion-computadora");
  
      this.botonesArmas = document.querySelectorAll(".arma");
      this.reiniciar = document.querySelector("#reiniciar");
      this.salir = document.querySelector("#salir");
  
      this.botonesArmas.forEach((boton) => {
        boton.addEventListener("click", this.iniciarTurno.bind(this));
      });
  
      this.reiniciar.addEventListener("click", this.reiniciarJuego.bind(this));
      this.salir.addEventListener("click", this.salirJuego.bind(this));
    }
  
    iniciarTurno(e) {
      let eleccionPC = Math.floor(Math.random() * 3);
      let eleccionUsuario = e.currentTarget.id;
  
      if (eleccionPC === 0) {
        eleccionPC = "piedra👊🏻";
      } else if (eleccionPC === 1) {
        eleccionPC = "papel🖐🏻";
      } else if (eleccionPC === 2) {
        eleccionPC = "tijera✌🏻";
      }
  
      if (
        (eleccionUsuario === "piedra👊🏻" && eleccionPC === "tijera✌🏻") ||
        (eleccionUsuario === "tijera✌🏻" && eleccionPC === "papel🖐🏻") ||
        (eleccionUsuario === "papel🖐🏻" && eleccionPC === "piedra👊🏻")
      ) {
        this.ganaUsuario();
      } else if (
        (eleccionPC === "piedra👊🏻" && eleccionUsuario === "tijera✌🏻") ||
        (eleccionPC === "tijera✌🏻" && eleccionUsuario === "papel🖐🏻") ||
        (eleccionPC === "papel🖐🏻" && eleccionUsuario === "piedra👊🏻")
      ) {
        this.ganaPC();
      } else {
        this.empate();
      }
  
      this.mensaje.classList.remove("disabled");
      this.contenedorEleccionUsuario.innerText = eleccionUsuario;
      this.contenedorEleccionPC.innerText = eleccionPC;
      if (this.puntosUsuario === 5 || this.puntosPC === 5) {
        if (this.puntosUsuario === 5) {
          this.instrucciones.innerText = "😎🔥 ¡Ganaste el juego! 😎🔥";
        }
  
        if (this.puntosPC === 5) {
          this.instrucciones.innerText = "😒 ¡La computadora ganó el juego! 😒";
        }
  
        this.elegiTuArma.classList.add("disabled");
        this.reiniciar.classList.remove("disabled");
        this.reiniciar.addEventListener("click", this.reiniciarJuego.bind(this));
        this.salir.classList.remove("disabled");
        this.salir.addEventListener("click", this.salirJuego.bind(this));
      }
    }
  
    ganaUsuario() {
      this.puntosUsuario++;
      this.contenedorPuntosUsuario.innerText = this.puntosUsuario;
      this.contenedorGanaPunto.innerHTML =
        '<div>¡Ganaste un punto! 😎🔥</div><div><img src="./img/celebration.gif" alt="Ganaste un punto" /></div>';
      if (this.puntosUsuario === 5) {
        this.partidasGanadasJugador++;
      }
    }
  
    ganaPC() {
      this.puntosPC++;
      this.contenedorPuntosPC.innerText = this.puntosPC;
      this.contenedorGanaPunto.innerHTML =
        '<div>😒¡La computadora ganó un punto! 😡</div><div><img src="./img/buuuuu.gif" alt="La computadora ganó un punto" /></div>';
      if (this.puntosPC === 5) {
        this.partidasGanadasComputadora++;
      }
    }
  
    empate() {
      this.contenedorGanaPunto.innerHTML =
        '<div>¡Empate! 🤦🏻‍♂️</div><div><img src="./img/injusticia.gif" alt="Empate" /></div>';
    }
  
    terminarJuego() {
      this.elegiTuArma.classList.add("disabled");
    }
  
    reiniciarJuego() {
      this.reiniciar.classList.add("disabled");
      this.elegiTuArma.classList.remove("disabled");
      this.mensaje.classList.add("disabled");
      this.puntosUsuario = 0;
      this.puntosPC = 0;
  
      this.contenedorPuntosUsuario.innerText = this.puntosUsuario;
      this.contenedorPuntosPC.innerText = this.puntosPC;
  
      this.instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
      document.querySelector("#salir").classList.add("disabled");
    }
  
    salirJuego() {
        const estadisticas =
          "\n\nESTADISTICAS:\nJugador: " +
          this.partidasGanadasJugador +
          " partidas ganadas\nComputadora: " +
          this.partidasGanadasComputadora +
          " partidas ganadas";
        this.contenedorGanaPunto.innerText = estadisticas;
    }
}
  
const jueguito = new Juego();
  


