const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    

    <style type="text/css">

        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
        *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        }
        .container{
        height: 350px;
        width: 430px;
        position: relative;
        }
        .container .wrapper{
        position: relative;
        height: 300px;
        width: 100%;
        border-radius: 10px;
        background: #fff;
        border: 2px dashed #000080;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        }
        .wrapper.active{
        border: none;
        }
        .wrapper .image{
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .wrapper img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        }
        .wrapper .icon{
        font-size: 100px;
        color: #000080;
        }
        .wrapper .text{
        font-size: 20px;
        font-weight: 500;
        color: #5B5B7B;
        }
        .wrapper #cancel-btn i{
        position: absolute;
        font-size: 20px;
        right: 15px;
        top: 15px;
        color: #9658fe;
        cursor: pointer;
        display: none;
        }
        .wrapper.active:hover #cancel-btn i{
        display: block;
        }
        .wrapper #cancel-btn i:hover{
        color: #e74c3c;
        }
        .wrapper .file-name{
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 8px 0;
        font-size: 18px;
        color: #fff;
        display: none;
        background: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
        }
        .wrapper.active:hover .file-name{
        display: block;
        }
        .container #custom-btn{
        margin-top: 30px;
        display: block;
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        border-radius: 25px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        background: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
        }
    </style>

    <div class="container">
        <div class="wrapper">
            <div class="image">
                <img src="" alt="">
            </div>
            <div class="content">
                <div class="icon">
                    <i class="fas fa-cloud-upload-alt"></i>
                </div>
                <div class="text">
                    No file chosen, yet!
                </div>
            </div>
            <div id="cancel-btn">
                <i class="fas fa-times"></i
            ></div>
            <div class="file-name">
                File name here
            </div>
        </div>
        <button  id="custom-btn">Choose a file</button>
        <input id="default-btn" type="file" hidden>
    </div>
`

export default class PreviewImage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$wrapper = this.shadowRoot.querySelector(".wrapper");
        this.$fileName = this.shadowRoot.querySelector(".file-name");
        this.$defaultBtn = this.shadowRoot.querySelector("#default-btn");
        this.$customBtn = this.shadowRoot.querySelector("#custom-btn");
        this.$cancelBtn = this.shadowRoot.querySelector("#cancel-btn");
        this.$img = this.shadowRoot.querySelector("img");

    }

    connectedCallback() {
        let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
        this.$customBtn.onclick = (event) => {
            event.preventDefault();
            this.$defaultBtn.click();
        }
        this.$defaultBtn.onchange = function(event){
            event.preventDefault();
            let file = this.files[0];
            console.log(this.files)
            if(file){
                let reader = new FileReader();
                reader.onload = function(){
                    let result = reader.result;
                    this.$img.setAttribute('src', result);
                    this.$wrapper.classList.add("active");
                }
                this.$cancelBtn.onclick = (event) => {
                    event.preventDefault();
                    this.$img.setAttribute('src', "");
                    this.$wrapper.classList.remove("active");
                }
                reader.readAsDataURL(file);
            }
            if(this.value){
                console.log(this.value)
                let valueStore = this.value.match(regExp);
                this.$fileName.textContent = valueStore;
            }
        }
    }


}
window.customElements.define('preview-image', PreviewImage)