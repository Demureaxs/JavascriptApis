//Create a constructor with 4 properties and 3 methods
function Pizza(size, sauce, topping, slices) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
  this.slices = slices;
  this.removeSlice = function () {
    this.slices--;
  };
  this.addSauce = function (sauce) {
    this.sauce = sauce;
  };
  this.addTopping = function (topping) {
    this.topping.push(topping);
  };
  this.smearShit = function (shitAmmount) {
    for (let i = shitAmmount; i < this.topping.length; i++) {
      topping[i] = 'dogshit';
    }
  };
}

const peperoni = new Pizza(
  'large',
  'tomato',
  ['cheese', 'ham', 'mushroom', 'olive'],
  8
);
peperoni.smearShit(2);
console.log(peperoni);
