function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  
  Dog.prototype.bark = function() {
    return 'Woof!';
  }
  
  const dog1 = new Dog('Kuroko', 'Labrador');
  const dog2 = new Dog('Itachi', 'Golden Retriever');
  const dog3 = new Dog('Eren', 'Poodle');
  
  console.log(dog1.bark());
  console.log(dog2.bark());
  console.log(dog3.bark());  