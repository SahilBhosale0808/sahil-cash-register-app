const billAmount = document.querySelector("#bill-amount");
const checkAmount = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];

checkAmount.addEventListener('click', function validateBillandCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    } 
    else {
        showError("The cash is less than the Bill Amount");
    }
  } 
  else {
        showError("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for( let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].textContent = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "hidden";
}

function showError(msg) {
  message.style.display = "block";
  message.textContent = msg;
}
