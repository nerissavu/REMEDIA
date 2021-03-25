let router = new Navigo(null,true)
let $app = document.getElementById('app');

router.on('/signinsignup', function(){
    $app.innerHTML = '<signin-signup></signin-signup>'
}).resolve();

window.router = router;
