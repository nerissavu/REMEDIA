import { getCurrentUser } from "../../models/users.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <nav class="nav">
        <div style="display:flex" class="nav-menu">
            <div class="nav-brand" style="display:flex; align-items:center">
                <a style="display: block; padding: 0px;"href="#">
                    <img src="../../../assets/logo/rectangle.png" class="text-gray" id="logo"style="margin:0;height: 80%;width: 100%;">
                </a>
            </div>
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <div>
                <ul style="padding: 0; " class="nav-items">
                    <li class="nav-link">
                        <a class="nav-letter"
                            href="./aboutus.html">ABOUT US</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="#">ADVISORY</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="./factandinfo2.html">FACTS & INFOGRAPHIC</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="stories.html">SRORIES</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="./druglibrary.html">DRUG LIBRARY</a>
                    </li>
                    <li id="signin" class="nav-link">
                        <a class="nav-letter" href="./login/signinsignup.html" id="sign_in_btn">SIGN IN</a>
                    </li>
                    <li id='name' class="nav-link">
                        <a class="nav-letter" href="./login/signinsignup.html" id="sign_in_btn">NAME</a>
                    </li>
                    <li id='signout' style="visibility: hidden;" class="nav-link">
                        <a class="nav-letter" href="" id="log_out_btn">SIGN OUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`

export default class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$signIn = this.shadowRoot.getElementById('signin')
        this.$name = this.shadowRoot.getElementById('name')
        this.$signOut = this.shadowRoot.getElementById('signout')

    }

    async connectedCallback() {
        // this.currentUser = await getCurrentUser()
        // console.log(this.currentUser)
        try {
            this.currentUser = await getCurrentUser();
            this.$signIn.style.display = none
            this.$name.style.display = block
            this.$name.innerHTML == this.currentUser.name
            this.$signOut.style.display == block
        } catch (error) {
            this.$signIn.style.display = block
            this.$name.style.display = none
            this.$signOut.style.display = none
        }
        
    }
    
}

window.customElements.define('nav-bar', NavBar)