// //Back-end logic:
// let akan=function(year, month, date, gender) {
//    let maleNames=["Kwasi","Kudwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
//    let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
//     let dateEntered = newDate(year, --month, date);
//     if (gender == "Male"){
//     return date && maleNames[date.getDay()];
//     }
//     else if (gender == "Female"){
//     return date && femaleNames[date.getDay()];
//     }
//     }
//     //Front-end logic:
    
"use strict";

let nameMenu = document.querySelector("#akan");

let dateEntered = new Date(document.querySelector("#date").value);
let date=document.querySelector("#date")

// let button = document.querySelector("#submit");

let maleNames=["Kwasi","Kudwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

let finalMenu = dateEntered.getDate();
// alert(finalMenu);

function submitForm() {
    event.preventDefault();
    let maleName=document.querySelector("#themale")
    
    console.log(maleName.checked);

    let femaleName=document.querySelector("#thefemale")
    console.log(femaleName.checked);

    console.log(date.value);
    console.log()

    let d=new Date(date.value)
    console.log(d.getDay());

    if (maleName.checked == true) {
        nameMenu.innerText = "Your name is: "+ (maleNames[d.getDay()]);
        alert("Your name is: "+ (maleNames[dateEntered]))
    }
    else if (femaleName.checked == true) {
            nameMenu.innerText = "Your name is: "+ (maleNames[d.getDay()]);
            alert("Your name is: "+ (maleNames[dateEntered]))

    }
   
}

