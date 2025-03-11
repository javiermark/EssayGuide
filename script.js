document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // 🔹 Dark Mode Toggle
    const toggleBtn = document.getElementById("darkModeToggle");
    const body = document.body;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
        body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // 🔹 Live Search Filtering
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let sections = document.querySelectorAll(".content section");

        sections.forEach((section) => {
            let text = section.textContent.toLowerCase();
            section.style.display = text.includes(filter) ? "block" : "none";
        });
    });

    // 🔹 Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
