import tabsData from "./tabsData.js";

const renderDiary = () => {
    // Extract the diary index from the URL
    const requestedIndex = parseInt(window.location.pathname.split('/').pop()) - 1; // -1 to convert back to 0-based index
    const diary = tabsData[requestedIndex];

    const diaryContent = document.getElementById('diary-content');

    if (diary) {
        document.getElementById('image').src = diary.image || ''; // Adjust this based on your data structure, as I see you don't have an 'image' field at the top level of each diary object
        document.getElementById('headerTitle').textContent = diary.headerTitle;
        document.getElementById('tabTitle').textContent = diary.tabTitle;
        document.getElementById('content').innerHTML = diary.content; // using innerHTML since your content has HTML tags
        document.title = diary.headerTitle;
    } else {
        const message = document.createElement('h2');
        message.textContent = 'Diary entry not found 😞';
        diaryContent.appendChild(message);
    }
}

renderDiary();
