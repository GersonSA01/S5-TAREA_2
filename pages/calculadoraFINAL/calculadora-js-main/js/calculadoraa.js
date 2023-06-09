class Calculadora {
    constructor() {
      this.pantalla = document.querySelector(".pantalla");
      this.botones = document.querySelectorAll(".btn");
    }
  


    evaluarExpresion(expresion) {
      try {
        return eval(expresion);
      } catch {
        return "Error!";
      }
    }
  


    clear() {
      this.pantalla.textContent = "0";
    }
  


    delete() {
      if (this.pantalla.textContent.length === 1 || this.pantalla.textContent === "Error!") {
        this.pantalla.textContent = "0";
      } else {
        this.pantalla.textContent = this.pantalla.textContent.slice(0, -1);
      }
    }
  


    botonIgual() {
      if (this.pantalla.textContent.includes("//")) {
        this.pantalla.textContent = this.dividirEntero();
      } else {
        try {
          this.pantalla.textContent = this.evaluarExpresion(this.pantalla.textContent);
        } catch {
          this.pantalla.textContent = "Error!";
        }
      }
    }
  


    actualizarPantalla(botonApretado) {
      if (this.pantalla.textContent === "0" || this.pantalla.textContent === "Error!") {
        this.pantalla.textContent = botonApretado;
      } else {
        this.pantalla.textContent += botonApretado;
      }
    }
  


    factorial() {
      const num1 = parseInt(this.pantalla.textContent);
      let total = 1;
      for (let i = 1; i <= num1; i++) {
        total *= i;
      }
      return total;
    }
  

    divisores() {
      const num2 = parseInt(this.pantalla.textContent);
      const divisores = [];
  
      for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) {
          divisores.push(i);
        }
      }
  
      const resultadoFinal = divisores.join(", ");
      this.pantalla.textContent = resultadoFinal;
    }
  

    
    raizCuadrada() {
      const num3 = parseInt(this.pantalla.textContent);
      const raizCuadrada = Math.sqrt(num3);
      this.pantalla.textContent = raizCuadrada.toString();
    }
  


    dividirEntero() {
      const expresion = this.pantalla.textContent;
      const numeros = expresion.split("//");
      const n1 = parseInt(numeros[0]);
      const n2 = parseInt(numeros[1]);
      const resultado = Math.floor(n1 / n2);
      return resultado.toString();
    }
  



    iniciarCalculadora() {
      this.botones.forEach((boton) => {
        boton.addEventListener("click", () => {
          const botonApretado = boton.id === "exp" ? "**" : (boton.id === "div" ? "//" : boton.textContent);
  
          if (boton.id === "c") {
            this.clear();
            return;
          }
  
          if (boton.id === "borrar") {
            this.delete();
            return;
          }
  
          if (boton.id === "igual") {
            this.botonIgual();
            return;
          }
  
          this.actualizarPantalla(botonApretado);
  
          if (boton.id === "factorial") {
            const resultadoFinal = this.factorial();
            this.pantalla.textContent = resultadoFinal.toString();
            return;
          }
  
          if (boton.id === "divisores") {
            this.divisores();
            return;
          }
  
          if (boton.id === "raiz") {
            this.raizCuadrada();
            return;
          }
        });
      });
    }
  }
  
  const calculadora = new Calculadora();
  calculadora.iniciarCalculadora();
  