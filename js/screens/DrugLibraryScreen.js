const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <nav-bar id='user-status' active="4"></nav-bar>
    <site-title></site-title>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <drug-container></drug-container>
    <game-container 
    image = "../../../assets/game/game.png"
    title = "Doctor Run"
    content ="After a long day going through this informative website, you might get intoxicated by the massive amount of education we deliver. Now get a life with this fun COVID-19-themed game."
    date ="20"
    month="January"
    src="../../../game-project/index.html"
    ></game-container>

    <game-container 
    image = "../../../assets/game/quiz.png"
    title = "Remedia Quiz"
    content ="Based on the information this website provides for you, absorb it yourself and compete in this game with us to test your knowledge. In this quiz, you have to answer 5 questions about medicine. Good luck!"
    date ="20"
    month="January"
    src="../../../start.html"
    ></game-container>
    <foo-ter></foo-ter>
`

export default class DrugLibraryScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('drug-library-screen', DrugLibraryScreen)