let ejercicio8 = document.querySelector(".ejercicio8");
let ejercicio9 = document.querySelector(".ejercicio9");
let ejercicio10 = document.querySelector(".ejercicio10");
let espacio = document.querySelector(".espacio2");

function Usuario(){
  this.name = "Puto Maduro"
}

let user = new Usuario()
console.log("HOLAA", user);
console.log("HOLAA", user.constructor);

ejercicio8.addEventListener("click", () => {
  let array = [
    { id: 1, name: "Nicolas" },
    { id: 2, name: "el pelao" },
    { id: 3, name: "jijija" },
  ];

  function pares(arr) {
    let pairs = [];

    for (x in arr) {
      let elemento = arr[x];
      pairs[x] = [elemento.id, elemento];
    }

    return pairs;
  }

  let resultado = pares(array);

  console.log(resultado);

  espacio.innerHTML = "";
  for (elemento in resultado) {
    console.log("Este es in: ", elemento);

    espacio.innerHTML += `
        <div>${elemento}: [${elemento},{${resultado[elemento][1].id},${resultado[elemento][1].name}}]</div>`;
  }
});

ejercicio9.addEventListener("click", () => {
  let array = [
    [1, { name: "Nicolas" }],
    [2, { name: "el pelao" }],
    [3, { name: "jijija" }],
  ];

  let resultado = [];

  function pares(arr) {
    for (x in arr) {
      resultado[x] = {
        nuevoID: arr[x][0],
        nombre: arr[x][1].name,
      };
    }

    return resultado;
  }

  let result = pares(array);

  console.log(result);

  espacio.innerHTML = `<span>${result}</span>`;
});

ejercicio10.addEventListener("click", () => {
  let valor;

  espacio.innerHTML =
    `<span>Ingrese la longitud del array</span>` +
    `<input type = number class = "input">` +
    `<button class = "botonInput">Siguiente</button>`;

  let input = document.querySelector(".input");
  let boton = document.querySelector(".botonInput");

  boton.addEventListener("click", () => {
    valor = input.value;
    let numero = "";
    let indice = 0;
    let arrayFinal = [];

    for (let i = 1; i <= valor; i++) {
      numero += i;

      arrayFinal[indice] = numero;

      indice++;
    }

    espacio.innerHTML = arrayFinal.join("<br>");

  });
});
