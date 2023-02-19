const pizza = {
  sauce: 'white',
  size: 'large',
  toppings: ['mushroom', 'ham', 'cock'],
  slices: 8,
  addSlice() {
    slices++;
  },
  removeSlice() {
    slices--;
  },
};

function pizzaMachine(sauce, size, toppigs, slices) {
  this.sauce = sauce;
  this.size = size;
  this.toppings = this.toppings;
  this.slices = slices;
  this.addSlice = function () {
    this.slices++;
  };
  this.removeSlice = function () {
    this.slice--;
  };
}
