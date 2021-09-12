var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
            resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.classList.add("col-3");
    cell1.innerHTML = '<span class="other">'+ data.name + '</span>';

    cell2 = newRow.insertCell(1);
    cell2.classList.add("col-3");
    cell2.innerHTML = '<span class="other">'+ data.surname + '</span>';


    cell3 = newRow.insertCell(2);
    cell3.classList.add("col-3");
    cell3.innerHTML = '<span class="other">'+ data.email + '</span>';

    cell4 = newRow.insertCell(3);
    cell4.classList.add("col-3");
    cell4.innerHTML = `<a class="btn" style="margin-top:10px; cursor:pointer;" onClick="onDelete(this)">Remove</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
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
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }