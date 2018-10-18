let subElementId =0;
let subDiv = 0;
let elementId = 0;
let addTextField = [
    "Single Line Text",
    "Multi Line Text",
    "Select Box(Drop down list)",
    "Radio Button",
    "CheckBoxes",
    "AgreeBox"
]

let Control = [
    "text",
    "textarea",
    "select",
    "radio",
    "checkbox",
    "checkbox",
]


const CustomList = () => {
    let body = document.getElementById("body");
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    body.appendChild(div);
     div.appendChild(ul);
    let addTextFieldIndex = 0;
    let parent = 0;
    addTextField.forEach(arr => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute('id', `li${addTextFieldIndex}`)
        li.innerHTML = `${arr}`;
        li.setAttribute("tabindex", -1);
        li.setAttribute("onfocus", 'liOnFocus(' + addTextFieldIndex + ')');
        li.setAttribute("onfocusout", 'liOnFocusOut(' + addTextFieldIndex + ')');
        li.setAttribute("onclick", 'addControl(' + addTextFieldIndex + ','+parent+')');

        addTextFieldIndex++;
    });
}

reqSel=["Required","Selection"]
labCho=["Label","Choice"]
del_Field_Choice=["Delete Field","Delete Choice"]

addControl = (addTextFieldIndex,parent_Or_Child) => {
    let labelChoice = 1;
    if((addTextFieldIndex/5)<=1) { labelChoice = 0;  }
//fromif(!labelChoice){
    let body = document.getElementById('body');
    let div = document.createElement("div");
    div.setAttribute('id', elementId);

    let typeLabel = document.createElement('label');
    typeLabel.innerHTML = `${Control[addTextFieldIndex]} : `.charAt(0).toUpperCase() + Control[addTextFieldIndex].slice(1);
    if(addTextFieldIndex == 5)    typeLabel.innerHTML = "Agree  : ";
//to}
    let br = document.createElement('br');
 
    let labelElement = document.createElement('label');
        labelElement.innerHTML = `&emsp;${labCho[labelChoice]} :  `;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', Control[addTextFieldIndex]);

    let requiredLabel = document.createElement('label');
    requiredLabel.innerHTML = ` &emsp;${reqSel[labelChoice]}`;
    let requiredLabelCheckBox = document.createElement('input');
    requiredLabelCheckBox.setAttribute('type', 'checkbox');

    let deleteButton = document.createElement("input");
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', `${del_Field_Choice[labelChoice]}`);
    deleteButton.setAttribute('class', 'deleteButtonClass');
    deleteButton.setAttribute('id', "delBtn"+ elementId);
    deleteButton.setAttribute('onclick', 'deleteDiv("' + deleteButton.id + '")')
 //  deleteButton.setAttribute('onclick', 'deleteDivThis(this)')
    body.appendChild(div);

    let child_Nodes = [typeLabel, br, labelElement, inputElement, requiredLabel, requiredLabelCheckBox, deleteButton]
    child_Nodes.forEach(arr => {
        div.appendChild(arr)
    })

    if (addTextFieldIndex == 2) {
        addSelectOption(div.id);
    }

    ++elementId;
}

let childDivId = 0;
addSelectOption = (parentId) => {  //automatically called
    let parentDiv = document.getElementById(parentId);
    let childDiv = document.createElement("div");
    parentDiv.appendChild(childDiv);
    childDiv.setAttribute('class','childDiv');
    childDiv.setAttribute('id', parentId+''+childDivId);
  //  console.log("childDiv : ",childDiv.id);

    let addOptionButton = document.createElement("input");
    addOptionButton.setAttribute('type', 'button');
    addOptionButton.setAttribute('value', 'Add Choice');
    addOptionButton.setAttribute('onclick', 'addChoice("'+childDiv.id+'")');
    childDiv.appendChild(addOptionButton);           //"'+ childDiv.id +'"
    childDiv++;
}


liOnFocus = (addTextFieldIndex) => {
    let set = document.getElementById("li" + addTextFieldIndex);
    set.innerHTML = "&emsp;" + addTextField[addTextFieldIndex];
}


liOnFocusOut = (addTextFieldIndex) => {
    let set = document.getElementById("li" + addTextFieldIndex);
    set.innerHTML = addTextField[addTextFieldIndex];
}

deleteDiv = (Id) => {
    let element = document.getElementById(Id);
    element.parentNode.remove();
}
deleteDivClass = (Class) => {
    let elements = document.getElementsByClassName(Class);
    console.log("typeof(elements) : ", typeof(elements));
    let myJSON = JSON.stringify(elements);
    console.log("Stringify : ", myJSON);
    console.log("element array",elements,"element.length :",elements.length);
    
    for(let i = 0; i < elements.length; i++) {
        console.log("removing : ",i, elements[i] );  
        elements[i].remove(); 
    }
}


addChoiceCount=0
addChoice = (subDivId) => {
    console.log("subDivId ",subDivId);
    let div = document.getElementById(subDivId);
    
    commonClassName =  subDivId+addChoiceCount
    //Div for choice elements
    let addChoiceDiv = document.createElement('div');
    addChoiceDiv.setAttribute('class', commonClassName);
 
    let br = document.createElement('br');
    br.setAttribute('class', commonClassName);
 
    let labelElement = document.createElement('label');
    labelElement.setAttribute('class', commonClassName);
    labelElement.innerHTML = "&emsp;Choice : ";
    
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', commonClassName);
    
    let selectedLabel = document.createElement('label');
    selectedLabel.innerHTML = " &emsp; Selected?"
    selectedLabel.setAttribute('class', commonClassName);
    
    let selectedLabelCheckBox = document.createElement('input');
    selectedLabelCheckBox.setAttribute('type', 'checkbox');
    selectedLabelCheckBox.setAttribute('class', commonClassName);
    //console.log("subDiv+addChoice 1 :", subDivId+addChoiceCount);
    let optionDeleteButton = document.createElement("input");
    
    optionDeleteButton.setAttribute('type', 'button');
    optionDeleteButton.setAttribute('value', 'Delete Choice');
    optionDeleteButton.setAttribute('class', 'deleteButtonClass');
    optionDeleteButton.setAttribute('class', commonClassName);

    console.log("delete choice class :",commonClassName);
    
    optionDeleteButton.setAttribute('id', "optDelBtn" + subElementId);
    optionDeleteButton.setAttribute('onclick', 'deleteDivClass("' + optionDeleteButton.className + '")')
       
    let child_Nodes = [br, labelElement, inputElement, selectedLabel, selectedLabelCheckBox, optionDeleteButton]
    child_Nodes.forEach(arr => {
        addChoiceDiv.appendChild(arr)
    })
    div.appendChild(addChoiceDiv)
    ++addChoiceCount;
    ++subElementId;
 }
 