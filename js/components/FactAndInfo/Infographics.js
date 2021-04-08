const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
   <link rel="stylesheet" href="../../../css/DrugLibrary2.css">
   <link rel="stylesheet" href="../../../css/facts-info.css">
 
   <h1 class="heading">Infographics</h1>

   <section class="infographics" style="padding: 0px;">
       <div data-aos="flip-left">
       <div class="gallery">
           <a href="infographics/covid.png"><img src="./assets/infographics/covid-small.png" width="380px"
                   height="300px"></a>
           <a href="infographics/flu-vaccine.png"><img src="./assets/infographics/flu-vaccine-small.png"
                   width="380px" height="300px"></a>
           <a href="infographics/pneumonia.jpg"><img src="./assets/infographics/pneumonia-small.jpg"
                   width="380px" height="300px"></a>
                   <img src="./assets/infographics/pneumonia-small.jpg"
                   width="380px" height="300px">
                   <img src="./assets/infographics/pneumonia-small.jpg"
                   width="380px" height="300px">
                   <img src="./assets/infographics/pneumonia-small.jpg"
                   width="380px" height="300px">
       </div>
   </div>
   </section>
`
 
export default class Infographics extends HTMLElement {
   constructor() {
       super();
       this.attachShadow({ mode: 'open' });
       this.shadowRoot.appendChild($template.content.cloneNode(true))
   }
 
}
 
window.customElements.define('info-graphics', Infographics)

