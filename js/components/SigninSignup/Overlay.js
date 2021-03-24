
const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div id="overlay-panel" class="overlay-panel">
        <h1 id="title">Welcome Back!</h1>
        <p id = "information">To keep connected with us please login with your personal info</p>
        <button class="ghost" id="button">Sign In</button>
    </div>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            background: #f6f5f7;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Montserrat', sans-serif;
            height: 100vh;
            margin: -20px 0 50px;
        }

        h1 {
            font-weight: bold;
            margin: 0;
        }

        p {
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 20px 0 30px;
        }

        button {
            border-radius: 20px;
            border: 1px solid #000080;;
            background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); 
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: transform 80ms ease-in;
        }

        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                    0 10px 10px rgba(0,0,0,0.22);
            position: relative;
            overflow: hidden;
            width: 768px;
            max-width: 100%;
            min-height: 550px;
        }

        button:active {
            transform: scale(0.95);
        }

        button:focus {
            outline: none;
        }

        button.ghost {
            background-color: transparent;
            border-color: #FFFFFF;
        }

        .overlay-right {
            right: 0;
            transform: translateX(0);
        }

        .overlay-panel {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            text-align: center;
            top: 0;
            height: 100%;
            width: 50%;
            transform: translateX(0);
            transition: transform 0.6s ease-in-out;
        }
    </style>


`

export default class Overlay extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$title = this.shadowRoot.getElementById('title')
        this.$information = this.shadowRoot.getElementById('title')
        this.$button = this.shadowRoot.getElementById('button')
        this.$overlayPanel = this.shadowRoot.getElementById('overlay-panel')

    }

    static get observedAttributes() {
        return ['title','infomation','button','class'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'title':
                this.$title.innerHTML = newValue
                break;
        
            case 'information':
                this.$information.innerHTML = newValue
                break;

            case 'button':
                this.$button.innerHTML = newValue
                break
            case 'class':
                this.$overlayPanel.classList.add(newValue)
                break


        }

    }   
    connectedCallback() {
        this.$button.onclick = () => {
            let button_name = this.$button.value;

            if (button_name == 'Sign In'){
                removeClassToContainer()
            } else if (button_name == 'Sign up'){
                addClassToContainer()
            }
        }
    }
}
window.customElements.define('over-lay', Overlay)