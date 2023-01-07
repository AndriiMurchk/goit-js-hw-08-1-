import throttle from 'lodash.throttle';



const feedbackForm = document.querySelector('.feedback-form');
let formData = {};

fillFeedbackFormFields();

const onFeedbackFormItemChange =  evt => {
    formData[evt.target.name] = evt.target.value;
  
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function fillFeedbackFormFields() {
    let persistedForm = localStorage.getItem('feedback-form-state')
    if(persistedForm) {
        persistedForm = JSON.parse(persistedForm);
       
        Object.entries(persistedForm).forEach(([name,value]) => {
           
            formData[name] = value;
           feedbackForm.elements[name].value = value;
    });

    }
}; 



const onFeedbackFormSubmit = event => {
    event.preventDefault();

    console.log(formData);
    formData = {};
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
}

feedbackForm.addEventListener('input', throttle(onFeedbackFormItemChange, 500));
feedbackForm.addEventListener('submit',onFeedbackFormSubmit);
