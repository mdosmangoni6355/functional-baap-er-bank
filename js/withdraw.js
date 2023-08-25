/*
1. Add withdraw button event handler
2. Get withdraw amount by using getInputFieldValueById function
3. Get previous withdraw amount by using getElementValueById function
4. Calculate new withdraw total and set the value
4-5. Set new withdraw total by using setTextElementValueById function
5. Get previous balance total by using getElementValueById
6. Calculate New balance total
7. Set balance total using setTextElementValueById
*/

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-input-field");
  const previousWithdrawTotal = getElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById('balance-total', newBalanceTotal);
});
