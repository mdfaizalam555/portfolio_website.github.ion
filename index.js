
function opentab(tabName, event) {
    // Hide all tab contents
    var tabs = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Deactivate all tab links
    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Show the selected tab content and activate the link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active-link");
}
