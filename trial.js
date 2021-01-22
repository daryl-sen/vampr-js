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




console.log(rootVampire.vampireWithName(rootVampire.name).name, (rootVampire.name));
console.log(rootVampire.vampireWithName(offspring1.name).name, (offspring1.name));
console.log(rootVampire.vampireWithName(offspring2.name).name, (offspring2.name));

// console.log(offspring5.name);

console.log(rootVampire.vampireWithName('e').name), (offspring5.name);
console.log(offspring3.vampireWithName('e').name), (offspring5.name);