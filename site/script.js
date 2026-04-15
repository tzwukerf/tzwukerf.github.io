const sidebarButtons = document.querySelectorAll(".sidebar-btn");
const tabContents = document.querySelectorAll(".tab-content");

sidebarButtons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");

        // // Remove active classes
        // sidebarButtons.forEach(btn => btn.classList.remove("active"));
        // tabContents.forEach(content => content.classList.remove("active"));

        // // Add active classes
        // button.classList.add("active");
        // document.getElementById(target).classList.add("active");
        window.location.href = target + ".html"
    });
});


