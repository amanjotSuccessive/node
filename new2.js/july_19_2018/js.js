let set = new Set();
let idCount = 0;
let readerDetailsArray = [];
function readerDetails(authorNameArray,bookNameArray,readCheckArray){
    this.authorName = authorNameArray ;
    this.bookName   = bookNameArray ;
    this.readCheck  = readCheckArray ;
 }

function insertRow() {
    ++idCount;
    let table = document.getElementById("myTable");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    let element1 = document.createElement("input");
    element1.type = "text";
    element1.name = "bookName";
    element1.id = "bookName" + idCount;
    //element1.value = document.getElementById("bookNameID").value;
    element1.disabled = true;
    cell1.appendChild(element1);
    //console.log(element1.id);

    let element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "authorName";
    element2.id = "authorName" + idCount;
    //element2.value = document.getElementById("authorNameID").value;
    element2.disable= true ;
    cell2.appendChild(element2); readCheckArray
     //console.log(element2.id);

    let element3 = document.createElement("input");
    element3.type = "text";
    element3.name = "readCheck";
    element3.id = "readCheck" + idCount;
    //element3.value = (document.getElementById("readCheck").checked) ? "Read" : "Unread";
    element3.disabled = true;
    cell3.appendChild(element3);
    //console.log(element3.id);
    console.log(authorNameArray, bookNameArray, readCheckArray);
    let deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.name = "delBtn";
    deleteBtn.className = "delBtn";
    deleteBtn.value = "Delete";
    deleteBtn.setAttribute("onclick", "deleteRow(this)");
    cell4.appendChild(deleteBtn);

    let editBtn = document.createElement("input");
    editBtn.type = "button";
    editBtn.name = "editBtn";
    editBtn.className = "delBtn";
    editBtn.value = "Edit";
    editBtn.id = "editBtn" + idCount;
    // console.log(editBtn.id,editBtn.value);
    editBtn.setAttribute("onclick", "editRow(this)");
    cell5.appendChild(editBtn);
}

function deleteRow(content) {
    let table = document.getElementById("myTable");
    table.deleteRow(content.parentNode.parentNode.rowIndex);
}

function editRow(content) {
    let indexValue = document.getElementById(content.id).value;
    if (indexValue === "Edit") { //console.log(indexValue);
        let index = document.getElementById(content.id).id;
        //console.log(typeof(index)); console.log(index[7]);
        document.getElementById("bookName" + index[7]).disabled = false;
        document.getElementById("authorName" + index[7]).disabled = false;
        document.getElementById("readCheck" + index[7]).disabled = false;
        document.getElementById(content.id).value = "Save";
    } else {
        let index = document.getElementById(content.id).id;
        document.getElementById("bookName" + index[7]).disabled = true;
        document.getElementById("authorName" + index[7]).disabled = true;
        document.getElementById("readCheck" + index[7]).disabled = true;
        document.getElementById(content.id).value = "Edit";
    }
}


function bookNameSearch() {

    let searchFor = document.getElementById("searchBoxID").value;
    if (searchFor === "") {
        alert("Nothing to search...Try again");
        return;
    }
    let numOfRows = document.getElementById("myTable").getElementsByTagName("tr").length;
    let flag = true;
    for (let i = 1; i < numOfRows; i++) {
        let inspectItem = document.getElementById("bookName" + i).value;
        // console.log(inspectItem);

        if (searchFor === (inspectItem)) {
            flag = false;
            alert("Your Search found" +
                "\nBook Name   : " + document.getElementById("bookName" + i).value +
                "\nAuthor Name : " + document.getElementById("authorName" + i).value +
                "\nRead Check  : " + document.getElementById("readCheck" + i).value);
        }

    }
    if (flag) alert("Search Not Found");
}

function change(arg) {
    let x = document.getElementById(arg);
    x.value = x.value.toLowerCase();
}

function sortData() {
    numberOfRowsOfTable = document.getElementById("myTable").getElementsByTagName("tr").length;

    let table, rows, tdd, x;

    //  table = document.getElementById("myTable");
    //  rows = table.getElementsByTagName("tr");
    // td=rows.getElementsByTagName("td").value;

    for (let i = 1; i < numberOfRowsOfTable; i++) {
        tdd = document.getElementById("myTable").rows[i].cells[0].getElementsByTagName("input")[0].id;
        console.log(tdd);
        //console.log(document.getElementById("authorName"+i).value);
    }
}


function countTableRows(){
let oRows = document.getElementsByTagName('tr');
let iRowCount = oRows.length;

//alert('Your table has ' + iRowCount + ' rows.');

}
