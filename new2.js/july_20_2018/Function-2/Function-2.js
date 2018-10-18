function personObjectTemplate(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + lastName;
    this.age = age;
    this.address = address;
}

personFirstName = ["Emma", "Olivia", "Ava", "Isabella", "Sophia"];
personLastName = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
personAge = [23, 34, 45, 43, 65];
personAddress = ["asd", "zxc", "qwe", "ert", "fgh"];

let numberOfPerson = personFirstName.length;
let Person = new Array(numberOfPerson); //arrayOfPerson 

function createPerson() {

    for (let loopCount = 0; loopCount < personFirstName.length; loopCount++) {
        Person[loopCount] = new personObjectTemplate(personFirstName[loopCount], personLastName[loopCount], personAge[loopCount], personAddress[loopCount]);
    }

}

function printPersonList() {
    createPerson();
    let body = document.getElementById("body");
    let ul = document.createElement("ul");
    body.appendChild(ul);

    for (let loopCount = 0; loopCount < personFirstName.length; loopCount++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute('value', `${personFirstName[loopCount]} ${personLastName[loopCount]}`);
        li.innerHTML = `${personFirstName[loopCount]} ${personLastName[loopCount]}`;
        li.setAttribute("onclick", 'detailOnPopup(' + loopCount + ')');
    }


}

function detailOnPopup(loopCount) {
    alert(
    `First Name : ${Person[loopCount].firstName}
      Last  Name : ${Person[loopCount].lastName}
      Age        : ${Person[loopCount].age}
      Address    : ${Person[loopCount].address}`);

}