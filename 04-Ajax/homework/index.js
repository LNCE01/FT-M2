//NPM Start for server on port 5000 to start listening to changes
let showFriends = function () {
  $.get("http://localhost:5000/amigos", function (friends) {
    console.log(friends);
  });
};
