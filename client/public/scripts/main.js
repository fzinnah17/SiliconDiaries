document.addEventListener('DOMContentLoaded', (event) => {
    const headers = document.querySelectorAll('.tab-label');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            headers.forEach(h => {
                if (h !== header) {
                    h.nextElementSibling.style.maxHeight = "0";
                    h.setAttribute('aria-expanded', 'false');
                }
            });

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                header.setAttribute('aria-expanded', 'false');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
