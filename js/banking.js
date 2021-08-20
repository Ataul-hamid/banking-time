function getInputValue(inputField) {
    const fieldInput = document.getElementById(inputField);
    const inputAmountText = fieldInput.value;
    const newAmount = parseFloat(inputAmountText);
    fieldInput.value = ' ';
    return newAmount;


}

function updateTotalField(totalFieldId, newAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const amount = parseFloat(totalText);
    const totalAmount = amount + newAmount;
    totalElement.innerText = totalAmount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd = true) {
        balanceTotal.innerText = previousBalanceTotal + newAmount;

    }
    else {
        balanceTotal.innerText = previousBalanceTotal - newAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);


    }

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);

    }
    if (newWithdrawAmount > currentBalance) {
        alert("you can't withdraw more than you have on your account");
    }

});