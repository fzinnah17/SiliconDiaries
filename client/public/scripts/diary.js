const renderDiary = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/diaries')
    const data = await response.json()
    const diaryContent = document.getElementById('diary-content')
    let diary = data.find(diary => diary.id === requestedID)

    if (diary) {
        document.getElementById('image').src = diary.image || ''; // Assuming you have an image property
        document.getElementById('headerTitle').textContent = diary.headerTitle;
        document.getElementById('tabTitle').textContent = diary.tabTitle;
        document.getElementById('content').textContent = diary.content;
        document.title = diary.headerTitle;
    } else {
        const message = document.createElement('h2');
        message.textContent = 'Diary entry not found 😞';
        diaryContent.appendChild(message);
    }
}

renderDiary();
