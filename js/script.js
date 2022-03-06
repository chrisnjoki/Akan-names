//Back-end logic:
let akan=function(year, month, date, gender) {
    let maleNames=["Kwasi","Kudwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let date = newDate(year, --month, date);
    if (gender=== "Male"){
    return date && maleNames[date.getDay()];
    }
    else{
    return date && femaleNames[date.getDay()];
    }
    }
    //Front-end logic:
    $(document).readyFunction(); {
    $("#form").submitFunction(event); {
    event.preventDefault();
    let year = parseInt($("#year").val());
    let month = parseInt($("#month").val());
    let date = parseInt($("#date").val());
    let gender =$("input;radio[name=gender];checked");
    let result= akan(year, month, date, gender);
    alert("Your Akan name is: " + result);
    
    }
    }