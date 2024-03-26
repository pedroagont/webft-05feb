// why clasess? Why Object Oriented Programming?

// PILLARS OF OOP
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// OBJECTS:
// Properties
// Methods

class Animal {
  constructor() {
    this.brain = true;
    this.legs = 0;
  }

  sleep() {
    return 'Sleeping.. zZzZzZz..';
  }
}

const animal = new Animal();

console.log(animal);
console.log(animal.sleep());

class Human extends Animal {
  constructor() {
    super();
    this.legs = 2;
  }

  speak(words) {
    return `Im a human and Im talking: ${words}`;
  }
}

const human = new Human();
console.log(human);
console.log(human.sleep());
console.log(human.speak('Hello!'));

class Pet extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.legs = 4;
    this.fleas = 1;
  }

  play(game) {
    return `Wuhuu playing: ${game}`;
  }

  setName(newName) {
    this.name = newName;
  }
}

const myPet = new Pet('scooby');
console.log(myPet);
console.log(myPet.sleep());
console.log(myPet.play('fetch 🎾'));
myPet.setName('scooby doo');
console.log(myPet);

class Dog extends Pet {
  constructor(name) {
    super();
    this.name = name;
    this.fleas = 4;
  }

  bark() {
    return 'bark bark! 🐶';
  }
}

class Cat extends Pet {
  constructor(name) {
    super();
    this.name = name;
    this.fleas = 0;
  }

  meow() {
    return 'meow meow! 😸';
  }
}

const snoopy = new Dog('Snoopy');
console.log(snoopy);
console.log(snoopy.sleep());
console.log(snoopy.play('fetch'));
console.log(snoopy.bark());
snoopy.setName('Snoopie');
console.log(snoopy);

const garfield = new Cat('Garfield');
console.log(garfield);
console.log(garfield.sleep());
console.log(garfield.play('fetch'));
console.log(garfield.meow());
garfield.setName('Garfieldy');
console.log(garfield);
