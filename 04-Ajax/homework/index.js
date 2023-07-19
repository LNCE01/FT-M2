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
      $("#lista").append(
        `<li id="${f.id}"> ${f.name} <button onclick="deleteFriend(${f.id})">X</button> </li>`
      );
    });
  });
};

$("#boton").click(showFriends);

$("#search").click(function () {
  let id = $("#input").val(); //Seleccionamos el valor de lo que se ingresa en el input
  if (id) {
    let rta = $.get("http://localhost:5000/amigos/" + id, function (friend) {
      if (friend) {
        //Solicitamos al servidor un amigo de todo el arreglo de amigos
        $("#amigo").text(
          `Name: ${friend.name} Age: ${friend.age} Email: ${friend.email}`
        );
        $("#input").empty();
      }
    });
    console.log(rta);
  } else {
    alert("Tenes que ingresar obligatoriamente un ID");
    $("#amigos").text("Tenes que ingresar un ID");
  }
});

let deleteFriend = function (idCruz) {
  let id;
  if (typeof idCruz === "number") {
    id = idCruz;
  } else {
    id = $("#inputDelete").val();
  }

  let friend1;
  if (id) {
    let rta = $.get("http://localhost:5000/amigos/" + id, function (friend) {
      friend1 = friend;
    });
    $.ajax({
      url: "http://localhost:5000/amigos/" + id,
      type: "DELETE",
      success: function () {
        $("#success").text(`Tu amigo ${friend1.name} fue borrado`);
        $("#inputDelete").val("");
        showFriends();
      },
    });
  } else {
    $("#success").text("Tenes que ingresar un ID");
  }
};
$("#delete").click(deleteFriend);
