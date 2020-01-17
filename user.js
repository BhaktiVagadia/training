function addUser()
{
    var userArray = new Array();
    userArray = JSON.parse(localStorage.getItem("userInformation"));

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthdate = document.getElementById("birthDate").value;

    var user={
        userName:name,
        userEmail:email,
        userPassword:password,
        userBirthdate:birthdate,

    }

    
    var nrow = 1;

    userArray.push(user);
    userArray.forEach(obj => {
        var table = document.getElementById("userList");
        var row = table.insertRow(nrow);
       
        var temp = [obj.userName,obj.userEmail,obj.userPassword,obj.userBirthdate,(new Date().getFullYear() - new Date(obj.userBirthdate).getFullYear()) ,"<button onclick='editData(this)'>Edit</button>","<button id=nrow onclick='deleteData(this)'>Delete</button>"];

        for (var i = 0; i < 7; i++) {
            row.insertCell(i).innerHTML = temp[i];
        }
        nrow++;
    })

    localStorage.setItem("userInformation", JSON.stringify(userArray));
}
function deleteData(ele)
{
    document.getElementById("userList").deleteRow(0);
    alert("You Click Delete "+ele.name);
    alert(document.getElementsByName("nrow"))

}

function editData(ele)
{
    var userArray = new Array();
    userArray = JSON.parse(localStorage.getItem("userInformation"));

    /*document.getElementById("name").innerHTML=;
    document.getElementById("email").innerHTML=;
    document.getElementById("password").innerHTML=;
    document.getElementById("birthDate").innerHTML=;
    document.getElementById("addUser").innerHTML="Edit Details"*/

}