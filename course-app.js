const courseInput = document.querySelector('#input-course');
const ratingInput = document.querySelector('#input-rating');
const btnAdd = document.querySelector('#btn-confirm');
const alertCtrl = document.querySelector('ion-alert-controller');
const courseList = document.querySelector('ion-list');
const clear = () => {
    courseInput.value = '';
    ratingInput.value = '';
};

btnAdd.addEventListener('click', () => {
    const enteredCourse = courseInput.value;
    const enteredRating = ratingInput.value;
    if(
        enteredCourse.trim().length <= 0 ||
        enteredRating.trim().length <= 0 ||
        enteredRating < 1
    )
    {
        alertCtrl.create({
            message: 'Please enter a valid input.',
            header: 'Invalid Input',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    const item = document.createElement('ion-item');
    item.textContent = enteredCourse + ': '+ enteredRating;
    courseList.appendChild(item);
    clear();
});