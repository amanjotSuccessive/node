class Atm {
    constructor() {
        console.log(" Empty Constructor called");
    }

    static GiveAmount() {
        giveAmount();
    }
}

popupError = () => {
    alert('Enter amount Between &#x20B9;200 and &#8377; 10000')
}

giveAmount = () => {

        arr_Currency = [];
        let withdrawCell = document.getElementById('withdrawalAmountId').value;
        const withdrawAmount = parseInt(withdrawCell);

        if (withdrawAmount <= 200) popupError();
        //if(withdrawAmount>1000) popupError();

        let _200Cell = document.getElementById('available__200').value;
        const available__200 = parseInt(_200Cell);

        let _500Cell = document.getElementById('available__500').value;
        const available__500 = parseInt(_500Cell);

        let _1000Cell = document.getElementById('available_1000').value;
        const available_1000 = parseInt(_1000Cell);

        let amountLeft = 0;
        let temp = 0;
        available__200;

        temp = available__200;
        while (temp) {
            arr_Currency.push(200);
            --temp;
        }

        temp = available__500;
        while (temp) {
            arr_Currency.push(500);
            --temp;
        }
        temp = available_1000;
        while (temp) {
            arr_Currency.push(1000);
            --temp;
        }

        let sum = 0;
        let index = 0;
        let _200 = 0,
            _500 = 0,
            _1000 = 0;
        let _break = false;
        while (true) {
            if (_break) break;
            sum += arr_Currency[index];
            if (arr_Currency[index] == 200) _200++;
            else if (arr_Currency[index] == 500) _500++;
            else if (arr_Currency[index] == 1000) _1000++;
            else return console.log("UNKNOWN VALUES IN ARRAY");

            if (sum == withdrawAmount) {
                giveNotes(_200, _500, _1000);
                console.log("exact match", _200, _500, _1000);
                break;
            }
            if (sum > withdrawAmount) {
                console.log("sum", sum)
                let check = sum - withdrawAmount;
                console.log("check", check);

                checkSwitch(check,_200, _500, _1000);
                index++;
                if (index > 50) break;
            }
            console.log(_200, _500, _1000);
        }
    }
    function checkSwitch(check,_200, _500, _1000) {

        switch (check) {
            case 100:
                if ((_500 < available__500) && (_200 >= 2)) {
                    console.log("if 100 1", _200, _500, _1000)
                    _500++;
                    _200 -= 2;
                    console.log("if 100 2", _200, _500, _1000);
                    sum = _1000 * 1000 + _500 * 500 + _200 * 200;
                    let check = sum - withdrawAmount;
                    console.log("sum 3", sum);
                    console.log("check 3", check);
                    checkSwitch(check);
    
                } else {
                    tractionIncomplete(1);
                    console.log(" 100 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
    
                break;
    
            case 200:
                if (_200 > 0) {
                    _200--;
                } else {
                    tractionIncomplete(2);
                    console.log(" 200 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
                break;
    
            case 300:
                if ((_500 < available__500) && (_200 > 0)) {
                    ++_500;
                    --_200;
                } else {
                    tractionIncomplete(3);
                    console.log(" 300 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
                break;
    
            case 400:
    
                if (_200 >= 2) {
                    _200 -= 2;
    
                    console.log("if 400 ", _200, _500, _1000);
                } else {
                    tractionIncomplete(4);
                    console.log(" 400 ", _200, _500, _1000);
                    return
                }
    
                if (sum - 2 * 200 == withdrawAmount) {
                    console.log("if else if 400 ");
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
    
                break;
            case 500:
    
                if (_500 > 0) {
                    --_500;
                } else {
                    tractionIncomplete(5);
                    console.log(" 500 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
                break;
    
            case 600:
    
                if (_200 >= 3) {
                    _200 -= 3;
                } else {
                    tractionIncomplete(6);
                    console.log(" 600 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
                break;
    
            case 700:
                if ((_500 > 0) && (_200 > 0)) {
                    --_500;
                    --_200;
                } else {
                    tractionIncomplete(7);
                    console.log(" 700 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
    
                break;
    
            case 800:
                if (_200 >= 4) {
                    _200length -= 4;
                } else {
                    tractionIncomplete(8);
                    console.log(" 800 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
    
                break;
    
            case 900:
                if ((_500 > 0) && (_200 > 2)) {
                    _500length--;
                    _200length -= 2;
                } else {
                    tractionIncomplete(9);
                    console.log(" 900 ", _200, _500, _1000);
                    return
                }
    
                if (sum == withdrawAmount) {
                    _break = true;
                    giveNotes(_200, _500, _1000);
                }
    
                break;
    
            default:
                console.log(" New Test Case Found!!! Report to Developer");
                _break = true;
                break;
        } //Switch ends
    
    }
        tractionIncomplete = (a) => {
            alert("transaction incomplete Try another Amount");
        }

        //creating dynamic text Fields, Showing number of notes given 
        giveNotes = (_200, _500, _1000) => {
            let body = document.getElementById('body');
            let getNotesDiv = document.createElement('div');
            getNotesDiv.setAttribute('id', 'getNotesDiv');

            let numberOfTwoHundredNotes = document.createElement('input');
            let numberOfFiveHundredNotes = document.createElement('input');
            let numberOfOneThousandNotes = document.createElement('input');

            numberOfTwoHundredNotes.setAttribute('class', 'notesTextField customerUse');
            numberOfFiveHundredNotes.setAttribute('class', 'customerUse notesTextField');
            numberOfOneThousandNotes.setAttribute('class', 'notesTextField customerUse');

            numberOfTwoHundredNotes.setAttribute('value', 'Number of  200 notes : ' + _200);
            numberOfFiveHundredNotes.setAttribute('value', 'Number of  500 notes : ' + _500);
            numberOfOneThousandNotes.setAttribute('value', 'Number of 1000 notes : ' + _1000);

            numberOfTwoHundredNotes.disabled = true;
            numberOfFiveHundredNotes.disabled = true;
            numberOfOneThousandNotes.disabled = true;

            body.appendChild(getNotesDiv);
            getNotesDiv.appendChild(numberOfTwoHundredNotes);
            getNotesDiv.appendChild(numberOfFiveHundredNotes);
            getNotesDiv.appendChild(numberOfOneThousandNotes);


        }
    