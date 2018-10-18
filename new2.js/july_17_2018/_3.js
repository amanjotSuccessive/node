let str=prompt("Enter the sentence");
const regex = /[^a-zA-Z0-9]/gm;
//const str = `!@#@!\$#\$dfafdsfsl;fks4242442`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`${match}`);
    });
}