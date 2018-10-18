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
        let temp = 0;
        arr_Currency = [];
        let withdrawCell = document.getElementById('withdrawalAmountId').value;
        const withdrawAmount = parseInt(withdrawCell);

        if ((withdrawAmount < 200)||typeof(withdrawAmount)!='Number') {popupError(); return;}
        //if(withdrawAmount>1000) popupError();

        let _200Cell = document.getElementById('available__200').value;
        let available__200 = parseInt(_200Cell);

        let _500Cell = document.getElementById('available__500').value;
        let available__500 = parseInt(_500Cell);

        let _1000Cell = document.getElementById('available_1000').value;
        let available_1000 = parseInt(_1000Cell);

        if (withdrawAmount % 200 == 0 && withdrawAmount / 200 <= available__200) {
            console.log("#_200 " + withdrawAmount / 200);
            giveNotes(withdrawAmount/200,0,0);
            available__200 -= withdrawAmount / 200;
          }
          
          else if (withdrawAmount % 100 == 0) {
            let i;
            for (i = available__200; i >= 0; i--) {
              if ((withdrawAmount - 200 * i) % 500 == 0 && withdrawAmount >= 200 * i) {
                temp++; break;
              }
            }
            if (temp == 1) {
              if ((withdrawAmount - 200 * i) / 500 <= available__500) {
                console.log("#_200 " + i + "#_500 " + (withdrawAmount - 200 * i) / 500);
                giveNotes(i,(withdrawAmount - 200 * i)/500,0);
                available__200 -= i; available__500 -= (withdrawAmount - 200 * i) / 500;
              }
              else {
                let j;
                for (j = available__500; j >= 0; j--) {
                  if ((withdrawAmount - 200 * i - 500 * j) % 1000 == 0) {
                    temp++; break;
                  }
                }
                if (temp == 2) {
                  console.log("#_200" + i + "#_500 " + j + "#_1000 " + (withdrawAmount - 200 * i - 500 * j) / 1000);
                  giveNotes(i,j,(withdrawAmount - 200 * i - 500 * j))
                  available__200 -= i; available__500 -= j; available_1000 -= (withdrawAmount - 200 * i - 500 * j) / 1000;
                }
                else {
                    tractionIncomplete();
                }
              }
            }
            else {
                tractionIncomplete();
            }
          }




    }

        tractionIncomplete = () => {
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
    