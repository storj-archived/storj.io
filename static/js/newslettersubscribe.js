window.onload = function() {
    var button = document.getElementById("mc-embedded-subscribe-footer");

    if (!button) {
        return;
    }

    button.onclick = function (event) {
        event.preventDefault();

        var inputValue = document.getElementById("mce-EMAIL-newsletter").value;
        var errElm = document.getElementById("mce-error-response-newsletter");
        var succElm = document.getElementById("mce-success-response-newsletter");

        if (!inputValue || !inputValue.includes("@")) {
            setDisplayAttribute(errElm, "flex");
            setDisplayAttribute(succElm, "none");

            return;
        }

        analytics.identify(
            inputValue,
            { email: inputValue, storj_newsletter: true },
            {},
            function() {
                analytics.track("storj_newsletter", {});

                setDisplayAttribute(errElm, "none");
                setDisplayAttribute(succElm, "flex");
            },
        );

        function setDisplayAttribute(element, value) {
            if (element) {
                element.setAttribute("style", "display: " + value + ";");
            }
        }
    }
}
