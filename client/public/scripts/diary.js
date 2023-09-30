// import tabsData from "./tabsData.js";

// const renderDiary = () => {
//     // Extract the diary index from the URL
//     const requestedIndex = parseInt(window.location.pathname.split('/').pop()) - 1; // -1 to convert back to 0-based index
//     const diary = tabsData[requestedIndex];

//     const diaryContent = document.getElementById('diary-content');

//     if (diary) {
//         document.getElementById('image').src = diary.image || ''; // Adjust this based on your data structure, as I see you don't have an 'image' field at the top level of each diary object
//         document.getElementById('headerTitle').textContent = diary.headerTitle;
//         document.getElementById('tabTitle').textContent = diary.tabTitle;
//         document.getElementById('content').innerHTML = diary.content; // using innerHTML since your content has HTML tags
//         document.title = diary.headerTitle;
//     } else {
//         const message = document.createElement('h2');
//         message.textContent = 'Diary entry not found 😞';
//         diaryContent.appendChild(message);
//     }
// }

// renderDiary();


// const renderDiary = async () => {
//     // Extract the diary index from the URL
//     const requestedIndex = parseInt(window.location.pathname.split('/').pop()) - 1; // -1 to convert back to 0-based index

//     // Make an HTTP request to fetch data for the requested diary entry
//     try {
//         const response = await fetch(`/diaries/${requestedIndex}`);
//         if (response.ok) {
//             const diary = await response.json();
//             const diaryContent = document.getElementById('diary-content');

//             // Display the retrieved diary data on the page
//             document.getElementById('image').src = diary.image_url || ''; // Adjust this based on your data structure
//             document.getElementById('headerTitle').textContent = diary.title;
//             document.getElementById('tabTitle').textContent = diary.text;
//             document.getElementById('content').textContent = diary.content;
//             document.title = diary.title;
//         } else {
//             // Handle the case where the requested diary entry was not found
//             const message = document.createElement('h2');
//             message.textContent = 'Diary entry not found 😞';
//             diaryContent.appendChild(message);
//         }
//     } catch (error) {
//         console.error('Error fetching diary data:', error);
//     }
// }

// renderDiary();


const renderDiary = async () => {
    const requestedId = window.location.pathname.split('/').pop();

    // Ensure diaryContent is defined at the start of the function
    const diaryContent = document.getElementById('diary-content');

    try {
        const response = await fetch(`/diaries/${requestedId}/data`);
        if (response.ok) {
            const diary = await response.json();

            // Display the retrieved diary data on the page
            document.getElementById('image').src = diary.image_url || ''; 
            document.getElementById('headerTitle').textContent = diary.title;
            document.getElementById('tabTitle').textContent = diary.text;
            document.getElementById('content').textContent = diary.content;
            document.title = diary.title;
        } else {
            // Handle the case where the requested diary entry was not found
            const message = document.createElement('h2');
            message.textContent = 'Diary entry not found 😞';
            diaryContent.appendChild(message);  // Ensure this line is inside the else block
        }
    } catch (error) {
        console.error('Error fetching diary data:', error);
    }
}

renderDiary();



