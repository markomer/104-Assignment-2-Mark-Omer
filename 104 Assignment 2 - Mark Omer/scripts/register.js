let salon={
    name:"The Fashion Pet",
    address:{
      street:"University Ave.",
      number:"262-K",
      ZIPcode:"22414",
    },
    hours:{
      open:"9:00 am",
      close:"5:00 pm"
    },
  pets:[]
}

function displayPetsNames(){
  alert(`You have ${salon.pets.length} pets.`);
  for (let i = 0; i < salon.pets.length; i++){
    console.log(salon.pets[i].name);
    document.write(petName);
  }
}

//create the constructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.breed=breed;
  this.service=service;
  this.ownerName=ownerName;
  this.contactPhone=contactPhone;
}


//getting the inputs from the register.html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("selService");
let petOwnerName = document.getElementById("txtOwnerName");
let petContactPhone = document.getElementById("txtContactPhone");

function register(){
  console.log("Register");
  //create an obj
  let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwnerName.value,petContactPhone.value);
  console.log(thePet);
  //push the obj nto the array
  //salon.pets.push(thePet);
  //display the array
  console.log(salon.pets);
  //alert

  alert("Your pet has been registered");
}









/*function init(){
  //create three pets using the constructor
  let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Mark","555-555-5555");
  let dooby = new Pet("Dooby",30,"Female","Boxer","Wash","Mark","555-555-5555");
  let doo = new Pet("Doo",30,"Male","Corgi","Nails","Mark","555-555-5555");
  salon.pets.push(scooby,dooby,doo); // push the element into the array
  //showPetsCards();
}

window.onload=init;*/

function newFunction(){
  document.getElementById("reset").reset();
}