var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["email"] = document.getElementById("email").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["phonenumber"] = document.getElementById("phonenumber").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("peopleList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = phonenumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = password;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("password").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("phonenumber").value = selectedRow.cells[4].innerHTML;
    document.getElementById("password").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.phonenumber;
    selectedRow.cells[5].innerHTML = formData.password;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}