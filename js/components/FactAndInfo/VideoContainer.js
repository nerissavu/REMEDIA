const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="card"   style=" background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); ">
    <div class="imgBx" data-text="Video Title">
        <iframe src="https://www.youtube.com/embed/xZbcwi7SfZE" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    <div class="content">
        <!-- <div > -->
        <h3 style="color: white;">The Antibiotic Apocalypse Explained
        </h3>
        <p style="color: white">What is the Antibiotic Apocalypse? What is it all about? And how
            dangerous is it? </p>
        <a href="https://www.youtube.com/watch?v=xZbcwi7SfZE">Play</a>
        <!-- </div> -->
    </div>
</div>
`

export default class FactContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$image = this.shadowRoot.getElementById('image')
        this.$user = this.shadowRoot.getElementById('user')
        this.$date = this.shadowRoot.getElementById('date')
        this.$title = this.shadowRoot.getElementById('title')
        this.$previewContent = this.shadowRoot.getElementById('preview-content')

    }

    static get observedAttributes() {
        return ['image','user','date','title','preview-content'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$image.setAttribute('src', newValue)
                break;

            case 'user':
                this.$user.innerHTML = newValue
                break;
        
            case 'date':
                this.$date.innerHTML = newValue
                break;

            case 'title':
                this.$title.innerHTML = newValue
                this.$title.setAttribute('href', newValue)
                break

            case 'preview-content':
                this.$previewContent.innerHTML = newValue
                break

        }

    }   
}

window.customElements.define('fact-container', FactContainer)