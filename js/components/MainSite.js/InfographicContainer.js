const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="info-post-content post-content" data-aos="flip-up" data-aos-delay="400">
        <div class="post-image">
            <div>
                <img src="../../../assets/infographic/info1.png" class="img" alt="info1">
            </div>
            <div class="info-post-info post-info flex-row">
                <!-- <span><i class="fas fa-user "></i>&nbsp;&nbsp;Admin</span> -->
                <span style="color: white;"><i class="fas fa-calendar-alt "></i>&nbsp;&nbsp;January
                    14,2019</span>
                <!-- <span>2 Comments</span> -->
            </div>
        </div>
        <div class="info-post-title post-title">
            <a class="title" href="#">Technology rises up</a>
        </div>
    </div>
`

export default class InfographicContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('infographic-container', InfographicContainer)