const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

<link rel="stylesheet" href="../../index.css">
<div class="container" id="container" >
    <div class="form-container sign-up-container">
        <signup-form></signup-form>
    </div>

    <div class="form-container sign-in-container">
        <login-form></login-form>
    </div>

    <div class="overlay-container">
        <div class="overlay">
            <over-lay class="overlay-left" title="Welcome Back!" infomation="To keep connected with us please login with your personal info" button="Sign In" ></over-lay>
            <over-lay class="overlay-right" title="Hello, Friend!" infomation="Enter your personal details and start journey with us" button="Sign Up" ></over-lay>
        </div>
    </div>
</div>

    
`;

export default class SigninSignup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$container = this.shadowRoot.getElementById('container')

    }

    connectedCallback() {
        function addClassToContainer(){
            this.$container.classList.add("right-panel-active")
        }
        function removeClassToContainer(){
            this.$container.classList.remove("right-panel-active")
        }
    }
}



window.customElements.define('signin-signup', SigninSignup);