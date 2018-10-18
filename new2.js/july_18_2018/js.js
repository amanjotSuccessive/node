let set = new Set();
let idCount=0;
function insertRow(){
    ++idCount;
    let table=document.getElementById("myTable");
    let row=table.insertRow();            
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);

    //cell1.innerHTML=document.getElementById("bookNameID").value; will show like label
    //cell2.innerHTML=document.getElementById("authorNameID").value;
    //cell3.innerHTML=(document.getElementById("readCheck").checked)?"Read":"Unread";
    
    let element1=document.createElement("input");
    element1.type="text";
    element1.name="bookName";
    element1.id="bookName"+idCount;
    element1.value=document.getElementById("bookNameID").value;
    //element1.disabled = true;
    cell1.appendChild(element1);
console.log(element1.id);


    let element2=document.createElement("input");
    element2.type="text";
    element2.name="bookName";
    element2.id="authorName"+idCount;
    element2.value=document.getElementById("authorNameID").value;
    element2.disabled = true;
    cell2.appendChild(element2);
console.log(element2.id);

    let element3=document.createElement("input");
    element3.type="text";
    element3.name="readCheck";
    element3.id="readCheck"+idCount;
    element3.value=(document.getElementById("readCheck").checked)?"Read":"Unread";
    element3.disabled = true;
    cell3.appendChild(element3);
console.log(element3.id);

    let element4=document.createElement("input");
    element4.type="button";
    element4.name="delBtn";
    element4.className="delBtn";
    element4.value="Delete";
    element4.setAttribute("onclick","deleteRow(this)");
    cell4.appendChild(element4);
}

function deleteRow(content)
{
let table=document.getElementById("myTable");
table.deleteRow(content.parentNode.parentNode.rowIndex);
}


function bookNameSearch(){

    let searchFor=document.getElementById("searchBoxID").value;
    let numOfRows = document.getElementById("myTable").getElementsByTagName("tr").length;
    console.log(searchFor,numOfRows);
    let flag=true;
    for(let i=1;i<numOfRows;i++)
    {
        let inspectItem=document.getElementById("bookName"+i).value;
        console.log(inspectItem);
      
        if(searchFor===(inspectItem))
        {
        flag=false;    
        alert("Your Search found"+
        "\nBook Name   : "+document.getElementById("bookName"+i).value+
        "\nAuthor Name : "+document.getElementById("authorName"+i).value+
        "\nRead Check  : "+document.getElementById("readCheck"+i).value); 
        }
        
    }
    if(flag) alert("Search Not Found");
 }
