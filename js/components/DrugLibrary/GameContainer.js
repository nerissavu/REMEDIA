const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="game_card">
        <div class="thumbnail">
            <img id="image" style="width: 550px; height: 350px" src="./assets/game.png" class="left">
        </div>
        <div class="right">
            <h1 id="title" class="name">Doctor Run </h1>
            <div class="author">
                <img src="../../../assets/logo/icon_200x200.png" alt="">
                <h2 class="author_name">Remedia Team</h2>
            </div>
            <div class="seperator">
            </div>
            <p id="content" class="game_content">
                After a long day going through this informative website, you might get intoxicated by the massive amount of education we deliver. Now get a life with this fun COVID-19-themed game.

                </p>
        </div>
        <h5 id="date" class="date">20</h5>
        <h6 id="month" class="month">January</h6>
    
        <div class="arrow">
            <li style="display: inline;   list-style: none; font-size: 30px;"><a id="source" href="./game-project/index.html" style="color: white;" ><i class="fas fa-arrow-right"></i></a></li>

        </div>

        <style>

    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    body{
        font-family: 'Poppins', sans-serif;
    ;
    } 
    
    
    .game_card{
        position: relative;
        height: 450px;
        width: 900px;
        margin: 200px auto;
        background: #fff;
        box-shadow: 7px 7px 50px 0px rgba(0, 0, 0, .7);
    }
    
    .thumbnail{
        float: left;
        position: relative;
        left: 30px;
        top: -30px;
        height: 320px;
        width: 530px;
        box-shadow: 8px 8px 50px 0px rgba(0, 0, 0, .7);
        overflow: hidden;
    
    }
    .img.left{
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        height: 100%;
        height:100%
    }
    
    .right{
        margin-left: 590px;
        margin-right: 20px;
    }
    .name{
        padding-top: 15px;
        font-size: 1.3rem;
        color: #4b4b4b;
    }
    .author {
        background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); 
        height: 30px;
        width: 130px;
        border-radius: 20px;
    }
    
    .author> img{
        padding-top: 5px;
        margin-left: 10px;
        float: left;
        height: 20px;
        width: 20px;
        border-radius: 50%;
    }
    
    .author_name{
        padding-top: 8px;
        margin-right: 6px;
        text-align: right;
        font-size: .5rem;
        color: white;
    }
    
    .game_content{
        text-align: justify;
        padding-top: 10px;
        font-size: 0.95rem;
        line-height: 150%;
        color:#4b4b4b
    }
    .date{
        position: absolute;
        left:30px;
        bottom:-80px;
        font-size: 3rem;
        color: #c3c3c3;
    }
    .month{
        position: absolute;
        left:30px;
        bottom:-40px;
        font-size: 1rem;
        color: #c3c3c3;
    }
    
    .arrow{
        position: absolute;
        right: 50px;
        bottom: -30px;
        padding-top: 14px;
        background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); 
        width: 60px;
        height: 60px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, .7);
        box-sizing: border-box;
    
    }
    </style>
`

export default class GameContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$image = this.shadowRoot.getElementById('image')
        this.$title = this.shadowRoot.getElementById('title')
        this.$content = this.shadowRoot.getElementById('content')
        this.$date = this.shadowRoot.getElementById('date')
        this.$month = this.shadowRoot.getElementById('month')
        this.$src = this.shadowRoot.getElementById('src')

    }

    static get observedAttributes() {
        return ['src','image','title','content','date','month'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$image.setAttribute('src', newValue)
                break;

            case 'title':
                this.$title.innerHTML = newValue
                break;
        
            case 'content':
                this.$content.innerHTML = newValue
                break;

            case 'date':
                this.$date.innerHTML = newValue
                break

            case 'month':
                this.$month.innerHTML = newValue
                break

            case 'src':
                this.$src.setAttribute('href', newValue)
                break

        }

    }   
    
}

window.customElements.define('game-container', GameContainer)