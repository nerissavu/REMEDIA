import { getCurrentUser, getUserByToken } from "../../models/users.js";


const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/postlist.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>  
    <div id="post-list">
    </div>
    <div id="post-btn-container">
        <button id="post-btn">POST NEW THREAD!</button>
    </div>
    `

export default class PostList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$postBtn = this.shadowRoot.getElementById('post-btn')
        this.$postList = this.shadowRoot.getElementById('post-list')
    }

    connectedCallback() {
        this.$postBtn.onclick = async (event) => {
            event.preventDefault();

            try {
                this.currentUser = await getCurrentUser();
                var y = event.clientY
                console.log(y)
                var $postForm = document.createElement('post-form');
                $postForm.setAttribute('y', y);
                this.$postList.appendChild($postForm);

            } catch (error) {
                alert('Please sign in to your account to post a new thread')
            }

        }
    }
}

window.customElements.define('post-list', PostList)