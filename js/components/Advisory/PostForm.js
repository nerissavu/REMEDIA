const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <form class="wrapper">
        <div class="title">
            <h1>Create Post</h1>
        </div>
        <div class="contact-form">
            <div class="input-fields">
                <input style="display:none" type="file" id="file" class="input" placeholder="Image" accept="image/png, image/jpeg"> 
                <label for="file">
                    Choose an image
                </label>
                <input-wrapper-post type="text" class="input" placeholder="Post Title"> </input-wrapper-post>
            </div>
            <div class="msg">
                <textarea placeholder="Post Content"></textarea>
            <button class="btn">send</div>
            </button>
        </div>
    </form>

    <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins', sans-serif;
        }
        .wrapper{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 550px;
            background: rgba(0,0,0,0.8);
            padding: 30px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }

        .wrapper .title h1{
            color: #c5ecfd;
            text-align: center;
            margin-bottom: 25px;
        }

        .contact-form{
            display: flex;
        }

        .input-fields{
            display: flex;
            flex-direction: column;
            margin-right: 4%;
        }

        .input-fields,
        .msg{
            width: 48%;
        }

        .input-fields .input,
        .msg textarea{
            margin: 10px 0;
            background: transparent;
            border: 0px;
            border-bottom: 2px solid #c5ecfd;
            padding: 10px;
            color: #c5ecfd;
            width: 100%;
        }
        
        label{
            margin: 10px 0;
            background: transparent;
            border: 0px;
            border-bottom: 2px solid #c5ecfd;
            padding: 10px;
            color: #c5ecfd;
            width: 100%;
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            padding-top: 25px;

        }

        .msg textarea{
            height: 195px;
            margin: 20px 0;
            resize: none;

        }

        ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #c5ecfd;
        }
        ::-moz-placeholder {
        /* Firefox 19+ */
        color: #c5ecfd;
        }
        :-ms-input-placeholder {
        /* IE 10+ */
        color: #c5ecfd;
        }

        .btn {
            background: #39b7dd;
            text-align: center;
            padding: 15px;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            text-transform: uppercase;
            width: 100%;
        }

        @media screen and (max-width: 600px){
            .contact-form{
                flex-direction: column;
            }
            .msg textarea{
                height: 80px;
            }
            .input-fields,
            .msg{
                width: 100%;
            }
        }
    </style>
`

export default class PostForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }



}

window.customElements.define('post-form', PostForm)