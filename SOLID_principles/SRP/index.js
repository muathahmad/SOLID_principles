class ValidatePerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  validateName(name) {
    return name.length > 3 ? true : false;
  }

  validateAge(age) {
    return age > 18 ? true : false;
  }
}

class DisplayPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.validate = new ValidatePerson(this.name, this.age);
  }

  display() {
    if (
      this.validate.validateAge(this.age) &&
      this.validate.validateName(this.name)
    ) {
      document.getElementById("text").innerHTML = `Name: ${this.name}, Age: ${this.age}`
    } else {
      document.getElementById("text").innerHTML = "Invalid";
    }
  }
}

const firstPerson = new DisplayPerson("Moath", 22);
firstPerson.display();
