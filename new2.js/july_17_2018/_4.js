
let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
let unwanted = [null, 0, '""', false, undefined,NaN];
//const result = words.filter(word => if(buggy));
var invalidEntries = 0;
function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}
function filterByID(item) {
  if (isNumber(item) && item !== 0) {
    return true;
  } 
  invalidEntries++;
  return false; 
}
var arrByID = arr.filter(filterByID);
console.log('Filtered Array\n', arrByID); 
console.log('Number of Invalid Entries = ', invalidEntries); 

