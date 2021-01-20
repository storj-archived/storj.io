window.onload = function() {
    var button = document.getElementById("mc-embedded-subscribe-footer");

    if (!button) {
        return;
    }

    button.onclick = function (event) {
        event.preventDefault();

        var inputValue = document.getElementById("mce-EMAIL-newsletter").value.toLowerCase().trim();
        var errElm = document.getElementById("mce-error-response-newsletter");
        var succElm = document.getElementById("mce-success-response-newsletter");

        if (!inputValue || !inputValue.includes("@")) {
            setDisplayAttribute(errElm, "d-block", "d-none");
            setDisplayAttribute(succElm, "d-none", "d-block");

            return;
        }

        analytics.identify(
            inputValue,
            { email: inputValue, storj_newsletter: true },
            {},
            function() {
                analytics.track("storj_newsletter", {});

                setDisplayAttribute(errElm, "d-none", "d-block");
                setDisplayAttribute(succElm, "d-block", "d-none");
            },
        );

        function setDisplayAttribute(element, classAdding, classRemoving) {
            if (element) {
                element.classList.add(classAdding);
                element.classList.remove(classRemoving);
            }
        }
    }
}
