
// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Highlight the active section in the navigation
const sections = document.querySelectorAll(".policy-card section");
const navLinks = document.querySelectorAll("#page-nav a");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", isActive);
        });
      });
    },
    {
      rootMargin: "-15% 0px -70% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}
