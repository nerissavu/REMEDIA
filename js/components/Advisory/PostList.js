import { getCurrentUser, getUserByToken } from "../../models/users.js";


const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/postlist.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>  
    <div id="post-btn-container">
        <button id="post-btn">POST NEW THREAD!</button>
    </div>
    <div id="post-list">
        <post-container ></post-container>
        <post-container content="bla bla bla" ></post-container>
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

    static get observedAttributes() {
        return ['posts'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        // newValue: string (json)
        if(attrName == 'messages') {
            let posts = JSON.parse(newValue);
            this.$postList.innerHTML = '';
            
            for(let post of posts) {
                // tạo và gán thuộc tính cho message-container -> <message-container content=""></message-container>
                let $postContainer = document.createElement('post-container');
                $postContainer.setAttribute('image', post.image);
                $postContainer.setAttribute('date', post.date);
                $postContainer.setAttribute('author', post.author);
                $postContainer.setAttribute('title', post.title);
                $postContainer.setAttribute('content', post.content);
                // thêm message-container vào list
                this.$postList.appendChild($postContainer);
            }
        }
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