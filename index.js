const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const ulClassLista = document.querySelector(".lista");

  // Ref: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/

  function eliminarElementosLi() {
    while (ulClassLista.firstChild) {
      ulClassLista.removeChild(ulClassLista.firstChild)
    }
  }

  function agregarElementosLi() {
    cosasQueAprendimos.forEach(element => {
      nuevoLiEl = document.createElement("li");
      textoNuevoLiEl = document.createTextNode(element.tema);
      nuevoLiEl.append(textoNuevoLiEl);
      if (element.class != "") {
        nuevoLiEl.classList.add(element.class);
      }
      ulClassLista.append(nuevoLiEl);
    });
  }

  eliminarElementosLi();
  agregarElementosLi();
}

main();
