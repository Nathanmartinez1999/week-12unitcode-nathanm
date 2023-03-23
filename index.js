function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var email = document.getElementById("email").value;

    if (name == "") {
        alert("Name is Required");
        return false;
    }

    if (age == "") {
        alert("Age is Rerquired");
        return false;
    }
    else if (age < 21) {
        alert("Must be 21 Years older to enter");
        return false;
    }
    if (phoneNumber == "") {
        alert("Phone number is Rerquired");
        return false;
    }

    if (email == "") {
        alert("Email is Rerquired");
        return false;
    }

    return true;
}

function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.phoneNumber + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
            '<td><button onclick="deleteData(' +
            index +
            ')" class="btn btn-danger">delete</button><button onclick = "updateData(' +
            index +
            ')" class="btn btn-danger">edit</button>';
        html += "</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var phoneNumber = document.getElementById("phone-number").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
        peopleList.push({
            name: name,
            age: age,
            phoneNumber: phoneNumber,
            email: email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("phone-number").value = "";
        document.getElementById("email").value = "";
    }
}

function deleteData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem
            ("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify
        (peopleList));
    showData();
}

function updateData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem
            ("peopleList"));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("phone-number").value = peopleList[index].phoneNumber;
    document.getElementById("email").value = peopleList[index].email;


    Document.querySelector("Update").onclick = function () {
        if (validateForm() == true)
            peopleList[index].name = document.getElementById("name").value;
        peopleList[index].age = document.getElementById("age").value;
        peopleList[index].phoneNumber = document.getElementById("phone-number").value;
        peopleList[index].email = document.getElementById("email").value;

        localStorage.setItem("peopleList", JSON.stringify(peopleList));

        showData();
    }

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("email").value = "";

}







