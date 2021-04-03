const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <nav-bar id='user-status'></nav-bar>
    <site-title></site-title>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <about-us></about-us>
    <our-team></our-team>
    <br>
    <our-mission></our-mission>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>     
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <fact-and-info></fact-and-info>
    <foo-ter></foo-ter>
`

export default class HomePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }

}

window.customElements.define('home-page', HomePage)