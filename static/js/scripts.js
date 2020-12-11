const becomeHostButton = document.getElementById("become-a-host-btn");
if (becomeHostButton) {
    becomeHostButton.addEventListener("click", function() {
        analytics.identify(analytics.user().anonymousId(), {become_a_host_clicked: true});
    })
}
