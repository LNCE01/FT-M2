class Benja {
  sayHello() {
    console.log("Hola");
  }
}

class Cleri extends Benja {
  constructor(eyes, legs) {
    super(eyes, legs);
    this.eyes = eyes;
    this.legs = legs;
  }
  displayOnScreen() {
    console.log(this.eyes);
  }
}
const argentina = new Cleri(2, 3);
argentina.sayHello();
argentina.displayOnScreen();
/*----------------------*/
