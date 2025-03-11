document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // 🔹 Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navRight = document.querySelector(".nav-right");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navRight.style.display = navRight.style.display === "block" ? "none" : "block";
        });
    }

    // 🔹 Dark Mode Toggle
    const toggleBtn = document.getElementById("darkModeToggle");
    const body = document.body;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
        body.classList.add("dark-mode");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    // 🔹 Live Search Filtering
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let filter = searchInput.value.toLowerCase();
            let sections = document.querySelectorAll(".content section");

            sections.forEach((section) => {
                let text = section.textContent.toLowerCase();
                section.style.display = text.includes(filter) ? "block" : "none";
            });
        });
    }

    // 🔹 Adjust Elements for Mobile View
    function adjustLayoutForMobile() {
        if (window.innerWidth <= 768) {
            document.querySelector("body").classList.add("mobile-view");
            document.querySelector(".nav-right").style.display = "none";
            if (menuToggle) {
                menuToggle.style.display = "block"; // Show menu button in mobile
            }
        } else {
            document.querySelector("body").classList.remove("mobile-view");
            document.querySelector(".nav-right").style.display = "flex";
            if (menuToggle) {
                menuToggle.style.display = "none"; // Hide menu button in desktop
            }
        }
    }

    window.addEventListener("resize", adjustLayoutForMobile);
    adjustLayoutForMobile(); // Run on page load

    // 🔹 Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");

    if (scrollToTopBtn) {
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
    }
});
