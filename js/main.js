window.onscroll = function () {
   const btn = document.getElementById("moveToTopBtn");
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
   } else {
      btn.style.display = "none";
   }
};

// Scroll to top when clicked
document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("moveToTopBtn").onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
});

document.addEventListener("DOMContentLoaded", function () {
   const toggleBtn = document.getElementById("themeToggleBtn");
   const icon = toggleBtn.querySelector("i");
   const heroImage = document.getElementById("heroImage");

   // Initial load - check saved theme
   if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      heroImage.src = "images/image2.png"; // Light mode image
   }

   toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");

      // Icon and image toggle
      if (isLight) {
         icon.classList.remove("fa-sun");
         icon.classList.add("fa-moon");
         heroImage.src = "images/image2.png"; // Light mode image
         localStorage.setItem("theme", "light");
      } else {
         icon.classList.remove("fa-moon");
         icon.classList.add("fa-sun");
         heroImage.src = "images/image.png"; // Dark mode image
         localStorage.setItem("theme", "dark");
      }
   });
});