var currentPage = window.location.pathname.split("/")[1]; if (document.getElementById("hint")) { var hint = document.getElementById("hint"); if (currentPage == "t-rex") { if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) { hint.style.display = "block"; } } else { hint.style.display = "block"; } }
var onclickLog = function () {
    var actionCategory = "NavBar"
    if (this.className.indexOf("nav-left") > 0)
        actionCategory = "ArrowLeft"; else if (this.className.indexOf("nav-right") > 0)
        actionCategory = "ArrowRight"; gtag('event', "click", { 'event_category': actionCategory, 'event_action': 'From_' + location.pathname, 'event_label': 'To_' + this.pathname });
}; var aObjs = document.getElementsByClassName("nav_str"); if (aObjs) { for (var i = 0; i < aObjs.length; i++) { aObjs[i].onclick = onclickLog; } }
var nav_left = document.getElementsByClassName("ep-nav-left")[0]; if (nav_left) nav_left.onclick = onclickLog; var nav_right = document.getElementsByClassName("ep-nav-right")[0]; if (nav_right) nav_right.onclick = onclickLog; var linksInfo = '{"links" : [' +
    '{"link":"","description":"Check this place, where your world is just flipped"},' +
    '{"link":"t-rex","description":"Play Chrome\'s hidden T-Rex dinosaur game"},' +
    '{"link":"underwater","description":"Want to do some searching underwater with Google?"},' +
    '{"link":"zergrush","description":"Play Google Zerg Rush game directly in the search result page!"},' +
    '{"link":"breakout","description":"Play Atari Breakout game directly in Google image search page!"},' +
    '{"link":"pacman","description":"Let Google\'s Pacman bring some of 8-bit memories back"},' +
    '{"link":"snake","description":"Playable Google styled snake game, just enjoy!"},' +
    '{"link":"doabarrelroll","description":"Do you know Google can do a 360-degree somersault?"},' +
    '{"link":"guitar","description":"Play Guitar with Google, really amazing!"},' +
    '{"link":"gravity","description":"To experience the amazing Google Gravity effects!"},' +
    '{"link":"tilt","description":"Look, Google tilts!"},' +
    '{"link":"search","description":"Coolest Google tricks list, official and unofficial"},' +
    '{"link":"black","description":"Believe it or not, we created an energy saving mode for Google"},' +
    '{"link":"zipper","description":"WTF, Google becomes a zipper???"},' +
    '{"link":"terminal","description":"Want to use Geek\'s method to visit Google?"},' +
    '{"link":"google1998","description":"Google homepage in the year of 1998 has been recovered!"},' +
    '{"link":"space-invaders","description":"Ready to defend Google? Fight back the Space Invaders!"},' +
    '{"link":"goooooooooooooooooogle","description":"Have you ever imagined Google becomes a spring?"},' +
    '{"link":"2048","description":"2048 game with Google theme. Play online now for free"}' +
    ']}'; obj = JSON.parse(linksInfo); var currLink, prevIndex, nextIndex; if (document.getElementById("ep-prev") && document.getElementById("ep-next")) { var prevSpan = document.getElementById("ep-prev"); var nextSpan = document.getElementById("ep-next"); if (!~document.referrer.indexOf("elgoog.im") && currentPage != "t-rex") { prevSpan.parentElement.href = "/"; nextSpan.parentElement.href = "/" + obj.links[1].link + "/"; prevSpan.innerText = obj.links[0].description; nextSpan.innerText = obj.links[1].description; } else { for (var i = 0; i < obj.links.length; i++) { currLink = obj.links[i].link; prevIndex = (i == 0) ? (obj.links.length - 1) : (i - 1); nextIndex = (i == obj.links.length - 1) ? 0 : (i + 1); if (currLink == currentPage) { prevSpan.parentElement.href = (obj.links[prevIndex].link == "") ? "/" : "/" + obj.links[prevIndex].link + "/"; nextSpan.parentElement.href = (obj.links[nextIndex].link == "") ? "/" : "/" + obj.links[nextIndex].link + "/"; prevSpan.innerText = obj.links[prevIndex].description; nextSpan.innerText = obj.links[nextIndex].description; } } } }