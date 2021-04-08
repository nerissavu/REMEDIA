const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
   <link rel="stylesheet" href="../../../css/DrugLibrary2.css">
   <link rel="stylesheet" href="../../../css/facts-info.css">
 
 
   <h1 class="heading">Magazine </h1>
   <section class="art">
       <div data-aos="flip-right">
       <div class="gallery">
           <div style="display: flex; justify-content: space-evenly;">
               <img src="./assets/art/red drug.jpg" width="500px" height="300px">
               <img src="./assets/art/cannabis-2.png" width="500px" height="300px">
           </div>
           <div>
               <img src="./assets/art/just-art.png" width="500px" height="300px">
               <img src="./assets/art/naloxone-2.png" width="500px" height="300px">
           </div>
           <div>
               <img src="./assets/art/4-drugs.png" width="500px" height="300px">
               <img src="./assets/art/ramadan-2.png" width="500px" height="300px">
           </div>
 
 
       </div>
   </div>
   </section>

`
 
export default class ArtMag extends HTMLElement {
   constructor() {
       super();
       this.attachShadow({ mode: 'open' });
       this.shadowRoot.appendChild($template.content.cloneNode(true))
   }
 
}
 
window.customElements.define('art-mag', ArtMag)

