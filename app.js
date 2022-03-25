import { signUp } from './fetch-utils.js';

const signUpForm = document.querySelector('#sign-up');

  // - Once the user hits submit on the form . . .
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  // - get the username and password from the form (`new FormData(form)`)
  
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');
  // - "log in the user"
    await signUp(email, password);
    // - redirect the user to the protected page with their data
    window.location.href = './polls';
});

///console.error 