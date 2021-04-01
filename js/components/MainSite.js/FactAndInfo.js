//chưa có hiệu ứng

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section class="container">
    <div class="site-content">
        <!--FACTS & VIDEO-->

        <div class="posts">
            <h1 class="heading">Facts</h1>
            <fact-container 
            image='../../../assets/fact/prctm.png'
            user='admin'
            date='20/02/2020'
            title='7 Important Facts Everyone Should Know About Paracetamol'
            
            ></fact-container>
            <hr>
            <fact-container></fact-container>
            <hr>

            <fact-container></fact-container>

            <!--pagination-->

            <!-- <div class="pagination flex-row">
                <a href="#"><i class="fas fa-chevron-left"></i></a>
                <a href="#" class="pages">1</a>
                <a href="#" class="pages">2</a>
                <a href="#" class="pages">3</a>
                <a href="#"><i class="fas fa-chevron-right"></i></a>
            </div> -->

            <!--pagination-->

        </div>
        <!--FACTS & VIDEO-->
        <!--INFOGRAPHICS-->


        <aside class="sidebar">
            <div class="popular-post">
                <h1 class="heading">Infographics</h1>
                <infographic-container></infographic-container>
                <infographic-container></infographic-container>
                <infographic-container></infographic-container>

            </div>
            <news-letter></news-letter>
        </aside>
    </div>
</section>


<!--FACTS AND INFOGRAPHICs-->
`

export default class FactAndInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('fact-and-info', FactAndInfo)