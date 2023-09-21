document.addEventListener('DOMContentLoaded', (event) => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Close all other accordion contents
            headers.forEach(h => {
                if (h !== header) {
                    h.nextElementSibling.style.display = "none";
                    h.setAttribute('aria-expanded', 'false');
                    h.nextElementSibling.setAttribute('aria-hidden', 'true');
                }
            });

            // Toggle the clicked accordion
            if (content.style.display === "block") {
                content.style.display = "none";
                header.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
            } else {
                content.style.display = "block";
                header.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });
});
