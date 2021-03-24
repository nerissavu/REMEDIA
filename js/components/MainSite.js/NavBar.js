const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <nav class="nav">
        <div style="display:flex" class="nav-menu">
            <div class="nav-brand" style="display:flex; align-items:center">
                <a style="display: block; padding: 0px;"
                    href="./blog.html"><img
                        src="" class="text-gray" id="logo"
                        style="margin:0;height: 80%;width: 100%;"></a>
            </div>
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <div>
                <ul style="padding: 0; " class="nav-items">
                    <li class="nav-link">
                        <a class="nav-letter"
                            href="./aboutus.html">ABOUT US</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="#">ADVISORY</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="./factandinfo2.html">FACTS & INFOGRAPHIC</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="stories.html">SRORIES</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="./druglibrary.html">DRUG LIBRARY</a>
                    </li>
                    <li class="nav-link">
                        <a class="nav-letter" href="./login/signinsignup.html" id="sign_in_btn">SIGN IN</a>
                    </li>
                    <li style="visibility: hidden;" class="nav-link">
                        <a class="nav-letter" href="" id="log_out_btn">SIGN OUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <style>

        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@900&display=swap');

        html,body{
            padding: 0;
            border: 0;
            margin: 0%;
            box-sizing: border-box;
            overflow-x: hidden;
        }


        a{
            text-decoration: none;
            /* font-family: 'Poppins', sans-serif; */

        }

        .flex-row{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        ul{
            list-style-type: none;
        }

        h1{
            font-family: 'Montserrat', sans-serif; 
            font-size: 2.5rem;
        }

        h2{
            font-family: 'Montserrat', sans-serif;
        }

        h3{
            font-family: 'Montserrat', sans-serif;
            font-size: 1.3rem;
        }

        button.btn{
            border: none;
            border-radius: 2rem;
            padding: 1rem 3rem;
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            outline: none;
            color: white
        }

        span{
            font-family: 'Poppins', sans-serif;
        }

        .container{
            margin: 0 5vw;
        }

        p{
            font-family: 'Poppins', sans-serif;
            /* color:white; */
        }


        .heading{
            font-size: 2.5rem;
            margin-right: -3px;
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
            padding-top: 4rem;
            font-family: 'Montserrat', sans-serif;
            padding-top: 30px;

        }

        .heading::after{
            content: "";
            width: 10rem;
            height: .4rem;
            background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); 
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2rem;
        }


        .nav-letter{
        color:#000080;
        font-weight: bold;
        }

        #logo{
            width: 50%;
            height: 50%;
            display: block
        }
        .nav{
            background: white;
            padding: 0.2rem;
            height:0rem ;
            min-height: 15vh;
            overflow: hidden;
            transition: height 1s ease-in-out;
            box-shadow: 0 9px 9px rgba(75, 74, 74, 0.25), 
            0 9px 9px rgba(138, 137, 137, 0.25);
        }

        .nav .nav-menu{
            justify-content: space-between;
        }


        .nav .toggle-collapse{
            position: absolute;
            top: 0%;
            width: 90%;
            cursor: pointer;
            display: none;
        }

        .nav .toggle-collapse .toggle-icons{
            display: flex;
            justify-content: flex-end;
            padding: 1.7rem 0;
        }

        .nav .toggle-collapse .toggle-icons i{
            font-size: 1.4rem;
            color: #21b9c4;
        }

        .collapse{
            height: 30rem;
        }

        .nav .nav-items{
            display: flex;
            margin: 0;
        }

        .nav .nav-items .nav-link{
            padding: 1.6rem 1rem ;
            font-size: 1.5rem ;
            position: relative;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.7rem;
        }

        .nav .nav-items .nav-link:hover{
            background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); 
        }

        .nav .nav-items .nav-link:hover a{
            color: white;
        }

        .nav .nav-brand a{
            font-size: 1.6rem;
            padding: 1rem 0.5rem;
            display: block;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.6rem;
        }

        .nav .nav-brand img{
            font-size: 1.6rem;
            display: block;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.6rem;
        }

        .nav .social{
            padding: 1.4rem 0.5rem;
        }

        .nav .social i{
            padding: 0 .2rem;
        }

        .nav .social i:hover{
            color: #a1c4cf;
        }

    </style>
`

export default class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        
    }

    // Được gọi duy nhất khi thẻ lần đầu tiên xuất hiện trong body
    // connectedCallback() {
    //     this.$signupForm.onsubmit = (event) => {
    //         event.preventDefault();
    //         let name = this.$name.value;
    //         let email = this.$email.value;
    //         let password = this.$password.value;

    //         function require(value){
    //             return value != '';
    //         }
 
    //         function confirmPassword(value){
    //             return value == password;
    //         }    

    //         function validateEmail(email) {
    //             const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //             return re.test(String(email).toLowerCase());
    //         }

    //         let isPassed = this.$name.validate(require,'Input your name') &
    //             (
    //                 this.$email.validate(require,'Input your email') &&
    //                 this.$email.validate(validateEmail,'Wrong email format')
    //             ) &
                
    //             this.$password.validate(require,'Input your password') & 
    //             (
    //                 this.$passwordConfirmation.validate(require,'Input your password confirmation') &&
    //                 this.$passwordConfirmation.validate(confirmPassword,'Password confirmation is not match')
    //             );
            
    //         if(isPassed){
    //             signup(name, email, password)
    //             console.log('Register successfully')
    //         }
    //     }
    // }
}

window.customElements.define('nav-bar', NavBar)