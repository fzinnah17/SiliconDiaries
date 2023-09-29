import tabsData from "./tabsData.js";

const renderDiaries = async () => {
    const mainContent = document.querySelector('.tabs');

    if (tabsData.length > 0) {
        tabsData.map(diary => {
            const tab = document.createElement('div');
            tab.className = 'tab';

            // Header Section
            const headerDiv = document.createElement('div');
            headerDiv.className = 'box';

            const headerContentDiv = document.createElement('div');
            headerContentDiv.className = 'accordion-header';  // You can adjust this class based on content
            const headerContent = document.createElement('div');
            headerContent.textContent = diary.headerTitle;

            headerContentDiv.appendChild(headerContent);
            headerDiv.appendChild(headerContentDiv);

            // Tab Label
            const tabLabel = document.createElement('h2');
            tabLabel.className = 'tab-label';
            tabLabel.textContent = diary.tabTitle;
            tabLabel.setAttribute('role', 'button');
            tabLabel.setAttribute('tabindex', '0');
            tabLabel.setAttribute('aria-expanded', 'false');

            tabLabel.addEventListener('click', function () {
                window.location.href = '/' + diary.tabTitle.toLowerCase().replace(/ /g, '-');
            });

            // Tab Content
            const tabContent = document.createElement('div');
            tabContent.className = 'tab-content';
            tabContent.innerHTML = diary.content;

            // Appending to the main tab div
            tab.appendChild(headerDiv);
            tab.appendChild(tabLabel);
            tab.appendChild(tabContent);

            // Appending the entire tab to the main content
            mainContent.appendChild(tab);
        });
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No diaries available 😞';
        mainContent.appendChild(message);
    }
}

renderDiaries();

const requestedUrl = window.location.pathname;
if (requestedUrl && requestedUrl !== '/') {
    window.location.href = '../404.html'
} else {
    renderDiaries()
}
