window.onload = function() {
    checkConsent();
};

function hasConsented() {
    var name = "storj_cookie_consent=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';') || [];

    return ca.some(cookie => {
        return cookie.trim().indexOf(name) === 0;
    });
}

function checkConsent(){
    if(hasConsented()){
        closeBanner()
        return
    }
}

function closeBanner(){
    document.cookie = "storj_cookie_consent=true;"
    var consentBanner = document.getElementById("consent-banner");
    consentBanner.style.display = "none";
    return
}

document.getElementById("closeBanner").addEventListener("click", function() {
	closeBanner()
});
