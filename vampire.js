class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let creatorCount = 0;
    let thisVampire = this;

    while (thisVampire.creator) {
      thisVampire = thisVampire.creator;
      creatorCount++;
    }

    return creatorCount;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // console.log(this.numberOfVampiresFromOriginal);
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    // console.log('searching for ', name);
    if (this.name === name) {
      return this;
    } 
    else if (this.offspring.length === 0) {
      // console.log(`'${this.name}' has no child`);
      return null;
    }

    let target = null;

    for (let child of this.offspring) {
      if (child.name === name) {
        // console.log(`found ${child.name}`);
        return child;
      } else {
        // console.log(`'${this.name}' has no child named '${name}'`);
        target = child.vampireWithName(name);
        if (target) {
          return target;
        }
      }
    }


    return target;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;
    for (let descendent of this.offspring) {
      total++;
      if (descendent.offspring.length !== 0) {
        total += descendent.totalDescendents;
      }
    }
    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // // create an array of all ancestors including themselves
    
    // let thisVampAncestors = [this];
    // let thatVampAncestors = [vampire];

    // console.log('thisvamp (initial)', thisVampAncestors);
    // console.log('thatvamp (initial)', thatVampAncestors);

    // for (let vamp of [this, vampire]) {
    //   let currentVamp = vamp;
    //   while (currentVamp.creator) {
    //     thisVampAncestors.push(currentVamp.creator);
    //     currentVamp = currentVamp.creator;
    //   }
    // }

    // console.log('thisvamp', thisVampAncestors.map(x => x.name));
    // console.log('thatvamp', thatVampAncestors.map(x => x.name));
    // console.log(vampire);
  }
}

module.exports = Vampire;

