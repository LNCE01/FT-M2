//NPM Start for server on port 5000 to start listening to changes
let showFriends = function () {
  $("#lista").empty(); //Cada vez que se invoque, vacia lo que hay adentro de la id Lista asi no se acumulan la lista de amigos si uno clickea multiples veces.
  $.get("http://localhost:5000/amigos", function (friends) {
    //metodo ajax, se hace la peticion a la url (servidor), y cuando se recibe la respuesta, se ejecuta el callback

    friends.forEach((f) => {
      //Con JavaScript ahora creariamos los elementos adentro de lista para poner amigos
      // let li = document.createElement ("li");
      // li.id = f.id;
      // li.innerText = f.name;
      // li.innerHTML = f.name;
      // let list = document.getElementById("lista");
      // list.appendChild(li);
      //Con AJAX es mas sencillo: Para cada elemento del arreglo de objetos friends, crea un list item con id y nombre y lo apendea a la lista.
      $("#lista").append(`<li id="${f.id}"> $(f.name} X</li>`);
    });
  });
};

$("#boton").click(showFriends);
