const iceCreamFlavor = ["chocolate", "vanilla"];
const newFlavor = "strawberry";

class IceCreamMaker {
  constructor(flavor) {
    this.flavor = flavor;
  }

  make() {
    if (iceCreamFlavor.indexOf(this.flavor) > -1) {
      const flavorIndex = iceCreamFlavor.indexOf(this.flavor);
      document.getElementById(
        "text"
      ).innerHTML = `Great success. You now have ${iceCreamFlavor[flavorIndex]} ice cream.`;
    } else {
      document.getElementById("text").innerHTML =
        "Epic fail. No ice cream for you.";
    }
  }
}

class AddFlavor {
  constructor(flavor) {
    this.flavor = flavor;
  }

  add() {
    iceCreamFlavor.push(this.flavor);
  }
}

const addNewFlavor = new AddFlavor(newFlavor);
addNewFlavor.add();

const makeStrawberry = new IceCreamMaker(newFlavor);
makeStrawberry.make();
