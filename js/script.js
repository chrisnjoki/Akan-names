"use strict";

let nameMenu = document.querySelector("#akan");

let dateEntered = new Date(document.querySelector("#date").value);

let date=document.querySelector("#date")

let maleNames=["Kwasi","Kudwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

let finalMenu = dateEntered.getDate();

function submitForm() {
    event.preventDefault();
    let maleName=document.querySelector("#themale")
    
    console.log(maleName.checked);

    let femaleName=document.querySelector("#thefemale")

    console.log(femaleName.checked);

    let d=new Date(date.value)
    console.log(d.getDay());

    console.log(date.value);
    console.log()


    if (maleName.checked == true) {
        nameMenu.innerText= "Your name is: "+ (maleNames[d.getDay()]);
        alert("Your name is: "+ (maleNames[dateEntered]))
    }
    else if (femaleName.checked == true) {
            nameMenu.innerText = "Your name is: "+ (femaleNames[d.getDay()]);
            alert("Your name is: "+ (femaleNames[dateEntered]))

    }
   
}

