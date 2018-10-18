arr_Currency = [];

let withdrawAmount = 3100;
let available__200 = 3;
let available__500 = 8;
let available_1000 = 10;

let amountLeft = 0;

let _200Start = 1;
while (available__200) {
    arr_Currency.push(200);
    --available__200;
}
let _200length = arr_Currency.length;
let _200Last = arr_Currency.length;

let _500Start = arr_Currency.length;
while (available__500) {
    arr_Currency.push(500);
    --available__500;
}
let _500length = arr_Currency.length - _200length;
let _500Last = arr_Currency.length;

let _1000Start = arr_Currency.length;
while (available_1000) {
    arr_Currency.push(1000);
    --available_1000;
}
let _1000length = arr_Currency.length - _500length;
let _1000Last = arr_Currency.length;

console.log(arr_Currency)

let sum = 0;
let index = 0;

while (true) {
    sum += arr_Currency[index]
    if (sum == withdrawAmount) {}
    if (sum > withdrawAmount) {

        let check = sum - withdrawAmount;
        check = 0;
        switch (check) {
            // assuming 1000 is not reached till case 500;
            case 100:
                _500length++;
                _200length -= 2;
                //remove 200*2 add 500*1
                break;
            case 200:
                --_200length;
                break;
            case 300:
                ++_500length;
                --_200length;
                break;
            case 400:
                _200length -= 2;
                break;
            case 500:
                _500length--;
                break;
            case 600:
                _200length -= 3;
                break;
            case 700:
                _500length++;
                _200length++;
                break;
            case 800:
                _200length -= 4;
                break;
            case 900:
                _500length--;
                _200length -= 2;
                break;
            default:
                console.log(" New Test Case Found!!! Report to Developer");break;
        }
    }
}
console.log(_200length, _500length, _1000length);