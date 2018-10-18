let person = {
    name: "Sam",
    age: 31,
    favColor: "black",
    car: "volvo",
    gender: "male",
    nationality: "Indian"
};

function printData(person, ...otherParameter) {
    otherParameter.forEach(keys => console.log(person[keys]));
}
printData(person, "name", "age", "nationality");