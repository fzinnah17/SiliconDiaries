// Create a navigation bar container
const navBar = document.createElement('nav');
navBar.className = 'navigation-bar';

// Create a div element for the logo
const logoDiv = document.createElement('div');
logoDiv.className = 'logo-container';

// Create an img element for the logo
const logoImage = document.createElement('img');
logoImage.src = '/path/to/logo.png'; // Replace with your logo's path
logoImage.alt = 'Silicon Diaries Logo';
logoDiv.appendChild(logoImage);

// Append the logoDiv to the navigation bar
navBar.appendChild(logoDiv);

// Create a div for the header title
const headerTitle = document.createElement('div');
headerTitle.className = 'header-title';
headerTitle.textContent = 'Silicon Diaries';

// Append headerTitle to the navigation bar
navBar.appendChild(headerTitle);

// Create a div for the header-right actions
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create a Home button
const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.addEventListener('click', function () {
    window.location.href = '/';
});
headerRight.appendChild(homeButton);

// Append headerRight to the navigation bar
navBar.appendChild(headerRight);

// Insert the navigation bar at the beginning of the body
document.body.insertBefore(navBar, document.body.firstChild);

// document.addEventListener('DOMContentLoaded', function () {
//     // Select the main header container
//     const mainHeader = document.querySelector('.silicon-text');

//     // Create a div element for the logo
//     const logoDiv = document.createElement('div');
//     logoDiv.className = 'logo-container';

//     // Create an img element for the logo
//     const logoImage = document.createElement('img');
//     logoImage.src = '/public/images/diary.png';
//     logoImage.alt = 'Silicon Diaries Logo';
//     logoDiv.appendChild(logoImage);

//     // Append the logoDiv to the main header
//     mainHeader.appendChild(logoDiv);

//     // Create the main title (this remains unchanged as per your design)
//     const headerTitle = document.createElement('div');
//     headerTitle.className = 'text-wrapper';
//     headerTitle.textContent = 'Silicon Diaries';
//     mainHeader.appendChild(headerTitle);

//     // Create a div for the header-right actions
//     const headerRight = document.createElement('div');
//     headerRight.className = 'header-right';

//     // Create a Home button
//     const homeButton = document.createElement('button');
//     homeButton.textContent = 'Home';
//     homeButton.addEventListener('click', function () {
//         window.location.href = '/';
//     });
//     headerRight.appendChild(homeButton);

//     // Append headerRight to the main header
//     mainHeader.appendChild(headerRight);
// });


