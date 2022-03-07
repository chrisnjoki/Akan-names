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

let dateEntered = new Date(document.querySelectorAll("#date").value);

// let button = document.querySelector("#submit");

let maleNames=["Kwasi","Kudwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

let finalMenu = dateEntered.getDate();
// alert(finalMenu);

function submitForm() {
    event.preventDefault();
    let maleName=document.querySelector("#themale")
    console.log(maleName.checked);
    if (maleName.checked == true) {
        nameMenu.innerText = "Your name is: "+ (maleNames[dateEntered]);
        alert("Your name is: "+ (maleNames[dateEntered]))
    }
    else if (femaleName.checked == true) {
            // nameMenu.innerText = `Your name is:  ${femaleNames[dateEntered]}`;
            nameMenu.innerText = "Your name is: "+ (maleNames[dateEntered]);

    }
   
}

