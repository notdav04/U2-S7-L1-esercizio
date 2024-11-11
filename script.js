class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      console.log(`${this.firstName} è piu vecchio di ${otherUser.firstName}`);
    } else if (this.age == otherUser.age) {
      console.log(
        `${this.firstName} e ${otherUser.firstName} hanno la stessa età`
      );
    } else {
      console.log(`${otherUser.firstName} è piu vecchio di ${this.firstName}`);
    }
  }
}

const user1 = new User("Mario", "Rossi", 33, "Milano");
const user2 = new User("Giulio", "Verdi", 22, "Roma");
const user3 = new User("Stefano", "Verdi", 33, "Roma");
const user4 = new User("Marco", "Verdi", 20, "Roma");

// console.log(user1);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.age);
// console.log(user1.location);

// console.log(user1.compareAge(user2));
// console.log(user3.compareAge(user4));
// console.log(user3.compareAge(user1));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    (this.species = species), (this.breed = breed);
  }
  compareOwner(otherPet) {
    if (this.ownerName == otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const pet1 = new Pet("lucifero", "marco", "gatto", "savannah");
const pet2 = new Pet("lucy", "marco", "gatto", "savannah");
const pet3 = new Pet("zoe", "mario", "cane", "labrador");

// console.log(pet1.compareOwner(pet2));
// console.log(pet1.compareOwner(pet3));
const petList = document.getElementById("petList");
const form = document.getElementById("petForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  //   console.log(petName, ownerName, species, breed);

  const newPet = new Pet(petName, ownerName, species, breed);

  const petListItem = document.createElement("li");
  petListItem.innerText = `Nome: ${newPet.petName}, proprietario: ${newPet.ownerName}, specie: ${newPet.species}, razza: ${newPet.breed}`;
  petList.appendChild(petListItem);
  form.reset();
});
