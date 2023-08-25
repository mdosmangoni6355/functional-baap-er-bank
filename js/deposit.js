
document.getElementById('deposit-btn').addEventListener('click', function(){
    /*
    1. Get element by id
    2. Get the value from the element
    3. Convert string value to a number
    */
   const newDepositAmount = getInputFieldValueById('deposit-input-field')
   /*
   1. Get previous deposit total by id
   */
    const previousDepositTotal = getElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // Set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // Get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})