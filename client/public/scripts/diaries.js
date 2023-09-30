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
                const diaryIndex = tabsData.indexOf(diary) + 1; // +1 to convert to 1-based index
                window.location.href = '/diary/' + diaryIndex;
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

const requestedUrl = window.location.pathname;
if (requestedUrl && requestedUrl !== '/') {
    window.location.href = '../404.html'
} else {
    renderDiaries()
}



// import tabsData from "./tabsData.js";

// const renderDiaries = async () => {
//     const mainContent = document.querySelector('.tabs');

//     // Add search input at the top
//     const searchInput = document.createElement('input');
//     searchInput.id = 'search-input';
//     searchInput.placeholder = 'Search diaries by title...';
//     searchInput.addEventListener('keyup', (event) => {
//         if (event.keyCode === 13) {
//             executeSearch();
//         }
//     });
//     mainContent.appendChild(searchInput);

//     if (tabsData.length > 0) {
//         tabsData.map(diary => {
//             // ... (same as before, no changes here)
//         });
//     } else {
//         const message = document.createElement('h2');
//         message.textContent = 'No diaries available 😞';
//         mainContent.appendChild(message);
//     }
// }

// const executeSearch = async () => {
//     const inputValue = document.getElementById('search-input').value;
//     if (!inputValue) return;

//     try {
//         const response = await fetch(`/diaries/search/title/${inputValue}`);
//         const data = await response.json();

//         if (data && data.length > 0) {
//             // Clear existing tabs
//             document.querySelector('.tabs').innerHTML = '';

//             // Render the searched diaries
//             renderSearchedDiaries(data);
//         } else {
//             // Handle no search results
//             alert('No diaries found for your search.');
//         }
//     } catch (error) {
//         console.error("Error fetching searched diaries:", error);
//     }
// }

// const renderSearchedDiaries = (diaries) => {
//     const mainContent = document.querySelector('.tabs');
//     diaries.map(diary => {
//         // This section is the same as in renderDiaries, 
//         // but now we're using the `diaries` parameter instead of `tabsData`.
//         const tab = document.createElement('div');
//         tab.className = 'tab';

//         // Header Section
//         const headerDiv = document.createElement('div');
//         headerDiv.className = 'box';

//         const headerContentDiv = document.createElement('div');
//         headerContentDiv.className = 'accordion-header';
//         const headerContent = document.createElement('div');
//         headerContent.textContent = diary.headerTitle;

//         headerContentDiv.appendChild(headerContent);
//         headerDiv.appendChild(headerContentDiv);

//         // Tab Label
//         const tabLabel = document.createElement('h2');
//         tabLabel.className = 'tab-label';
//         tabLabel.textContent = diary.tabTitle;
//         tabLabel.setAttribute('role', 'button');
//         tabLabel.setAttribute('tabindex', '0');
//         tabLabel.setAttribute('aria-expanded', 'false');

//         tabLabel.addEventListener('click', function () {
//             const diaryIndex = diaries.indexOf(diary) + 1;
//             window.location.href = '/diary/' + diaryIndex;
//         });

//         // Tab Content
//         const tabContent = document.createElement('div');
//         tabContent.className = 'tab-content';
//         tabContent.innerHTML = diary.content;

//         // Appending to the main tab div
//         tab.appendChild(headerDiv);
//         tab.appendChild(tabLabel);
//         tab.appendChild(tabContent);

//         // Appending the entire tab to the main content
//         mainContent.appendChild(tab);
//     });
// }

// renderDiaries();

// const requestedUrl = window.location.pathname;
// if (requestedUrl && requestedUrl !== '/') {
//     window.location.href = '../404.html'
// } else {
//     renderDiaries()
// }