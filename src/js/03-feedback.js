import throttle from 'lodash.throttle';



const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillFeedbackFormFields = () => {
    try {
        const formDataFormsLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        if (formDataFormsLS === null) {
            return;
        }
    
        for (const prop in formDataFormsLS) {
    
            feedbackFormEl.elements[prop].value = formDataFormsLS[prop];
            formData[prop] = formDataFormsLS[prop];
        }
    } catch (err) {
        console.log(err);
    }

}
 
fillFeedbackFormFields();

const onFeedbackFormItemChange = event => {
    const {target} = event;

   const name = target.name;
   const value = target.value;

   formData[name] = value;
    
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};



const onFeedbackFormSubmit = event => {
    event.preventDefault();

    console.log(formData);

    feedbackFormEl.reset();
    localStorage.removeItem('feedback-form-state');
}

feedbackFormEl.addEventListener('input', throttle(onFeedbackFormItemChange, 500));
feedbackFormEl.addEventListener('submit',onFeedbackFormSubmit);

cc