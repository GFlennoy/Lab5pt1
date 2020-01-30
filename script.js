//Create AddressBook & Contact classes
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  } //deleteAt method
}
//create one instance of AddressBook
let goodBook = new AddressBook();
//Call the AddressBook's add method
goodBook.add("Michael Jordan", "mj@jordan23.com", "248.777.9311", "homie");
goodBook.add("Mike Jones", "mj@cas.edu", "281.330.8004", "droog");
goodBook.add(
  "Grant Flennoy",
  "flennoyg@gmail.com",
  "248.207.2281",
  "young Bull"
);
console.log(goodBook);
//goodBook.deleteAt(0);
console.log(goodBook);
//Create & calling print function
function print(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
}
print(goodBook);
