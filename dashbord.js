var userArray = new Array();
userArray = JSON.parse(localStorage.getItem("userInformation"));
var ageGroup1=0,ageGroup2=0,ageGroup3=0;
  


document.getElementById("name").innerHTML = "Hello "+localStorage.getItem("LoginName");
userArray.forEach(obj => {

    var age = new Date().getFullYear() - new Date(obj.userBirthdate).getFullYear();

        if(age < 18)
        {
            ageGroup1++;
        }

        else if(age > 18 && age<50)
        {
            ageGroup2++;
        }

        else if(age > 50)
        {
            ageGroup3 ++;
        }
    })

    document.getElementById("less18").innerHTML=ageGroup1;
    document.getElementById("between18-50").innerHTML=ageGroup2;
    document.getElementById("greater50").innerHTML=ageGroup3;