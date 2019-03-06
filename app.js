const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expense-list');
const totalExpensesSpan = document.querySelector('#total-expenses');
totalExpenses = 0;
const clear = () => {
   reasonInput.value = '';
   amountInput.value = '';
};
const alertCtrl = document.querySelector('ion-alert-controller');

confirmBtn.addEventListener('click',() => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(
        enteredReason.trim().length <= 0 ||
        enteredAmount <=0 ||
        enteredAmount.trim().length <=0
    ) {
        alertCtrl.create({
            message: 'Please enter valid reason and amount!',
            header: 'Invalid inputs.',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $'+ enteredAmount;

    expenseList.appendChild(newItem);
    totalExpenses += +enteredAmount;
    totalExpensesSpan.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);

