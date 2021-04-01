let router = new Navigo(null,true)
let $app = document.getElementById('app');

router.on('/signinsignup', function(){
    $app.innerHTML = '<signin-signup></signin-signup>'
}).resolve();

// router.on(function(){
//     router.navigate('/signinsignup')
// }).resolve();

window.router = router;
