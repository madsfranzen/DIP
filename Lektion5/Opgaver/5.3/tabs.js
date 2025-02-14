document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("h2 span");
    const contents = document.querySelectorAll("h1");

    // Function to hide all content and remove active class from tabs
    function hideAllContents() {
        contents.forEach(content => content.style.display = "none");
        tabs.forEach(tab => tab.classList.remove("active"));
    }

    // Function to show content based on index
    function showContent(index) {
        contents[index].style.display = "block";
        tabs[index].classList.add("active");
    }

    // Add click event listeners to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            hideAllContents();
            showContent(index);
        });
    });

    // Initially show the first tab content
    hideAllContents();
    showContent(0);

});