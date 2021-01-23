const Vampire = require('./vampire.js');


rootVampire = new Vampire("root")

offspring1 = new Vampire("a", 1000);
offspring2 = new Vampire("b", 900);
offspring3 = new Vampire("c", 1400);
offspring4 = new Vampire("d", 1890);
offspring5 = new Vampire("e", 1990);
offspring6 = new Vampire("f", 2000);
offspring7 = new Vampire("g", 2010);
offspring8 = new Vampire("h", 2017);

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);


// console.log(rootVampire.allMillennialVampires.length).to.equal(4);
// console.log(rootVampire.allMillennialVampires).to.include(offspring5);
// console.log(rootVampire.allMillennialVampires).to.include(offspring6);
// console.log(rootVampire.allMillennialVampires).to.include(offspring7);
// console.log(rootVampire.allMillennialVampires).to.include(offspring8);

console.log(rootVampire.allMillennialVampires.length);



// console.log(rootVampire.allMillennialVampires, '\n------------------');