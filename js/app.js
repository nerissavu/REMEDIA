import InputWrapper from './components/InputWrapper.js'
import LoginForm from './components/LoginForm.js'
import SignupForm from './components/SignupForm.js'

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('app');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});