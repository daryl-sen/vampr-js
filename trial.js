const Vampire = require('./vampire.js');


rootVampire = new Vampire("root")

offspring1 = new Vampire("a");
offspring2 = new Vampire("b");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
offspring6 = new Vampire("f");
offspring7 = new Vampire("g");
offspring8 = new Vampire("h");

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);