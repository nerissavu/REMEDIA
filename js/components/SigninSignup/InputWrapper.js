const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <div class="form-group">
        <input type = 'text' id='input' class='form-control' placeholder = 'This is input'>
        <div id='error'></div>
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

        input {
            background-color: #eee;
            border: none;
            padding: 12px 15px;
            margin: 8px 0;
            width: 300px;
        }

        #error {
            color: red; 
            text-align: left;
            font-size: 10px
        }
    </style>
`

export default class InputWrapper extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$input = this.shadowRoot.getElementById('input')
        this.$error = this.shadowRoot.getElementById('error')
    }

    static get observedAttributes() {
        return ['type','placeholder','error','default'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'type':
                this.$input.type = newValue
                break;
        
            case 'placeholder':
                this.$input.placeholder = newValue
                break;

            case 'error':
                this.$error.innerHTML = newValue
                break

            case 'default':
                this.$input.value = newValue
                break

        }

    }   
    get value(){
        return this.$input.value;
    }

    set error(message){
        this.setAttribute('error',message)
    }

    validate(condition, message){
        if(condition(this.value)) {
            this.error = "";
            return true;
        } else {
            this.error = message;
            return false
        }
    }
}
window.customElements.define('input-wrapper', InputWrapper)