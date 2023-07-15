var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
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
      for (let i = 0; i > classes.length; i++) {
        if ("." + classes[i] === selector) return true; //Supongamos que pasan el selector ".clase3", el loop empieza a recorrer el array classList y cuando matchea, devuelve true
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
  } else if (selectorType === "tag") {
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
