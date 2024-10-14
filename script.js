// Q1

var itemsArray = [
    {name: "juice", price: '50', quantity: '3'},
    {name: "cookie", price: '30', quantity: '9'},
    {name: "shirt", price: '880', quantity: '1'},
    {name: "pen", price: '100', quantity: '2'}
  ];
  
  // Function to calculate total price of each item and all items
  function calculateTotalPrice(items) {
    let grandTotal = 0;
  
    items.forEach(item => {
      let totalPrice = parseInt(item.price) * parseInt(item.quantity);
      console.log(`Total price of ${item.name}: ${totalPrice}`);
      grandTotal += totalPrice;
    });
  
    console.log(`Total price of all items: ${grandTotal}`);
  }
  
  // Call the function
  calculateTotalPrice(itemsArray);
  


  //Q2
  // Create an object with the specified properties
let user = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    age: 25,
    gender: "Male",
    city: "New York",
    country: "USA"
  };
  
  // Check if 'age' and 'country' properties exist
  console.log('age' in user);        // true
  console.log('country' in user);    // true
  
  // Check if 'firstName' and 'lastName' properties exist
  console.log('firstName' in user);  // false
  console.log('lastName' in user);   // false
  
  // Alternatively, you can use hasOwnProperty() method
  console.log(user.hasOwnProperty('age'));       // true
  console.log(user.hasOwnProperty('country'));   // true
  console.log(user.hasOwnProperty('firstName')); // false
  console.log(user.hasOwnProperty('lastName'));  // false

  
  //Q3

  // Constructor function with some properties
function Person(name, age, gender, city, country) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
  }
  
  // Creating multiple records using the constructor
  let person1 = new Person("John Doe", 25, "Male", "New York", "USA");
  let person2 = new Person("Jane Smith", 30, "Female", "London", "UK");
  let person3 = new Person("Ali Khan", 28, "Male", "Karachi", "Pakistan");
  
  // Logging the records
  console.log(person1);
  console.log(person2);
  console.log(person3);
  

//   Q4

// Constructor function for population records
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to get form data and create a record
function saveRecord(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById('address').value;
    let education = document.getElementById('education').value;
    let profession = document.getElementById('profession').value;

    let person = new Person(name, gender, address, education, profession);
    storeRecord(person);
    displayRecords();
}

// Store record in localStorage
function storeRecord(person) {
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(person);
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

// Display all records from localStorage
function displayRecords() {
    let recordList = document.getElementById('recordList');
    recordList.innerHTML = '';

    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.forEach((record, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${record.name}, ${record.gender}, ${record.address}, ${record.education}, ${record.profession}`;
        recordList.appendChild(listItem);
    });
}

// Event listener for form submission
document.getElementById('populationForm').addEventListener('submit', saveRecord);

// Display records when the page loads
window.onload = displayRecords;
