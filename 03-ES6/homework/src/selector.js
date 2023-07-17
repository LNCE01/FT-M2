var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  // TU CÓDIGO AQUÍ
  for (var i = 0; i < startEl.children.length; i++) {
    var elements = traverseDomAndCollectElements(
      matchFunc,
      startEl.children[i]
    );
    resultSet = [...resultSet, ...elements];
  }
  return resultSet;
};

// Detecta la posicion cero del string para determinar el selector y lo devuelve: id, class, tag.class, tag
let selectorTypeMatcher = function (selector) {
  // tu código aquí
  //selector = 'div' > tag // tag .  class
  // #unID > id
  if (selector[0] === "#") {
    return "id";
  }
  if (selector[0] === ".") {
    return "class";
  }
  // selector > tag.class > [tag, class]
  if (selector.split(".").length > 1) {
    return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un parametro y devuelve true/false dependiendo si el elemento matchea el selector.

//Si me pasan #myId
var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector); //el selector va a decir "sos un id"
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (el) {
      //Ejemplo: por paramentro ingresa el tag return de la function selectorTypeMatcher, el element:
      //<div id=myId></div> su element.id seria: myId y hay que compararlo con el selector #myId, por ende le concatenamos un hashtag al id del elemento.
      return "#" + el.id === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = function (el) {
      var classes = el.classList; //clasess = ["clase1","clase2","clase3"]ß
      for (let i = 0; i < classes.length; i++) {
        if ("." + classes[i] === selector) return true; //Supongamos que pasan el selector ".clase3", el loop empieza a recorrer el array classList y cuando matchea, devuelve true
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    //Supongamos que buscamos un p.small, conviene usar un split
    matchFunction = function (el) {
      //para el ejemplo, cuando recorremos el arbol, el seria un elemento parecido a este <p class='small'></p>
      var [tagBuscado, classBuscado] = selector.split("."); //Aca separamos en 'p' y en 'small'
      //tenemos que buscar elementos donde se consigan las dos cosas asi que volvemos a llamar y utilizamos el operador & AND. A matchFunctionMaker se le pasa el tagBuscado (es decir el tag paragraph) y el que seria el elemento con el que comparamos cuando recorremos el arbol.
      return (
        matchFunctionMaker(tagBuscado)(el) &&
        matchFunctionMaker("." + classBuscado)(el)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      //‹div>hola</div> >> el.tagName = 'DIV' >> el.tagName.toLowerCase() = 'div'
      return el.tagName.toLowerCase() === selector;
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
