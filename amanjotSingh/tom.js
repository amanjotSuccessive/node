let lastAccessedIndex;
let endPage = false;
let forSortPurposeOnly;
let Context;
// function loads automatically when html loads
function loadData() {
    loadTable();
}
// creates table 
function loadTable(startIndex = 0, accessedIndex = 1, sort = "id") {
    if (accessedIndex == -1) {
        if (lastAccessedIndex == 1) {
            alert("Page not found");
            return
        }
        accessedIndex = lastAccessedIndex - 1;
        --lastAccessedIndex;
        endPage = false;
    }
    if (accessedIndex == 1) {
        lastAccessedIndex = accessedIndex;
    }

    if (accessedIndex == 0) {
        if (endPage == true) {
            alert("No students are registered \n DB Ends ... GO BACK");
            return
        }
        accessedIndex = lastAccessedIndex + 1;
        ++lastAccessedIndex;
    }
    forSortPurposeOnly = accessedIndex;


    //console.log("sort by ", sort)
    //console.log("loadtable" , lastAccessedIndex)
    console.log("accessedIndex", accessedIndex); //&orderBy={firstName%20desc}
    $.getJSON(`http://assessment.aspcore.net/students?page=${accessedIndex}&orderBy=${sort}`, function (data) {
        // console.log(data.result.length);
        if (data.result.length < 5) {
            endPage = true
        }
        let i = startIndex;
        let j = 0;
        let temp;
        let makeID = true;
        let table = document.getElementById("jsonTable")

        $("#jsonTable td").remove();

        let cell = []
        $.each(data.result, function (key, val) {
            let row = table.insertRow();
            j = 0;
            cell[0] = row.insertCell(0);
            cell[1] = row.insertCell(1);
            cell[2] = row.insertCell(2);
            cell[3] = row.insertCell(3);
            cell[4] = row.insertCell(4);
            //cell[5] = row.insertCell(5);

            let element4 = document.createElement("input");
            element4.type = "button";
            element4.name = "deleteBtn";
            element4.className = "btn btn-danger";
            element4.value = "Delete";
            element4.setAttribute("onclick", "deleteFunction(this)");
            cell[3].appendChild(element4);

            let element5 = document.createElement("input");
            element5.type = "button";
            element5.name = "editBtn";
            element5.className = "editBtn btn btn-info";
            element5.value = "Edit";
            // element5.data-toggle ="modal"; 
            //element5.data-target = "#myModal";
            //element5.setAttribute("onclick", "putFunction(this)");
            element5.setAttribute("onclick", "openModel(this)");
            cell[4].appendChild(element5);
            temp = Object.values(data.result)[i];
            $.each(temp, function (key, val) {
                if (j != 0) {
                    cell[j - 1].innerHTML = val;
                }
                if (makeID) {
                    element4.id = 'd' + val;
                    element5.id = 'e' + val;
                    //  console.log(element4.id.slice(1), element5.id);
                    makeID = false;
                }
                j++;
                return (j !== 4);

            });
            makeID = true;
            i++;

        });
    });
}


// function to delete entry 
function deleteFunction(context) {
    let id = context.id.slice(1);
    console.log("deleteFunction called")
    $.ajax({
        url: `http://assessment.aspcore.net/students/${id}`,
        type: 'DELETE',
        success: function (result) {
            console.log("row deleted", result);
        }
    });
    let table = document.getElementById("jsonTable");
    table.deleteRow(context.parentNode.parentNode.rowIndex);
}
//this is a "edit button" used for active enter data button 
function openModel(context) {
    document.getElementById("editData").disabled = false
    Context = context;
    console.log("Context id :", Context.id);
    alert(" Now Press \"Enter Data\" button \n It is enabled ")

}

//called by enterDataFunction to run put Command
function putFunction(first, last, email, registration) {
    let id = Context.id.slice(1);
    console.log(typeof(id))
    console.log("putFunction 2",Context.id);

   return $.ajax({
        url: "http://assessment.aspcore.net/students/76",
        type: 'PUT',
        data: {

            firstName: first,
            lastName: last,
            emailAddress: email,
            registrationDate: registration,
            processData: false,
            contentType: false,
        },

        success: function (result) {
            console.log("row Edited", result)
        }
    });
}


//sort data on click of "Sort BY ->"
function sortBy(sortById) {
  //  console.log("last access sort", lastAccessedIndex, sortById, typeof (sortById))
    loadTable(0, forSortPurposeOnly, sortById);
}
// modal OnClick Function
function submitData() {
    firstNameSubmit = document.getElementById("modalFirstName");
    lastNameSubmit = document.getElementById("modalLastName");
    emailAddressSubmit = document.getElementById("modalEmail");
    let registrationDate = "2011-03-02T00:00:00";
    document.getElementById("editData").disabled = true;

    try {
        console.log("Submit Data 1",Context.id);
        putFunction(firstNameSubmit, lastNameSubmit, emailAddressSubmit, registrationDate)
    } catch (err) {
        alert("ERROR \n" + err.message);
    }

}