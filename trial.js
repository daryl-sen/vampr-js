const Vampire = require('./vampire.js');


rootVampire = new Vampire("root")

offspring1 = new Vampire("andrew");
offspring2 = new Vampire("sarah");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
rootVampire.addOffspring(offspring1);
offspring1.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring4.addOffspring(offspring5);




console.log(rootVampire.vampireWithName(rootVampire.name).name, (rootVampire.name), '\n------');
console.log(rootVampire.vampireWithName(offspring1.name).name, (offspring1.name), '\n------');
console.log(rootVampire.vampireWithName(offspring2.name).name, (offspring2.name), '\n------');
console.log(rootVampire.vampireWithName(offspring5.name).name), (offspring5.name);
console.log(offspring3.vampireWithName(offspring5.name).name), (offspring5.name);