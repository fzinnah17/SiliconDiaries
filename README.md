# SiliconDiaries

By: Farnaz Zinnah

About this web app: 
      
      In the fast-paced world of technology, it's essential for developers to pause, reflect, and monitor their well-being. "Silicon Valleys" serves as a digital sanctuary for tech professionals to document their daily feelings, achievements, and struggles. This platform emphasizes mindfulness, self-reflection, and proactive self-care.

Time spent: 40 hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five list items, each with at least three attributes (such as title, text, and image URL)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is appropriately styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, as an accordion, rather than lists

## Video Walkthrough

Here's a walkthrough of implemented required features for Unit 1 features:

👉🏿<img src='https://github.com/fzinnah17/SiliconDiaries/blob/main/Zinnah-Farnaz-SiliconProject.gif' title='Unit 1 features GIF' />

GIF created with ...  LiceCap

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add:
1. **ESM and Directory Paths:**
    - **Challenge:** When using ES6 modules (indicated by `import`/`export` syntax) in Node.js, traditional CommonJS variables `__filename` and `__dirname` are not available. 
    - **Solution:** I used the built-in `url` and `path` modules to recreate `__filename` and `__dirname` functionality. The lines:
        ```javascript
        const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
        const __dirname = dirname(__filename); // Get the directory name of the current module
        ```
      serve to define `__filename` and `__dirname` by transforming the module URL to a filesystem path.

2. **Checking Requested URLs:**
    - **Challenge:** It seems like there might have been an issue connecting to the HTML file or other static files. To debug, I checked each incoming request URL.
    - **Solution:** I added a middleware to log the request URLs to the console:
        ```javascript
        app.use((req, res, next) => {
            console.log("Request URL:", req.url);
            next();
        });
        ```
      This middleware prints the requested URL for every incoming request, which is useful for debugging connectivity or routing issues.

3. **Explicitly Serving main.js:**
    - **Challenge:** There was an issue with serving the `main.js` file using the regular static file-serving method of Express.js. 
    - **Solution:** To overcome this, I created a specific route just for `main.js` to ensure that it's correctly served:
        ```javascript
        app.get('/public/scripts/main.js', (req, res) => {
            const explicitPath = path.join(__dirname, '../client/public/scripts/main.js');
            res.sendFile(explicitPath);
        });
        ```
      This explicitly sets the path and serves `main.js` when its URL is requested.

4. **Issue with Static Files in the `/public` Directory:**
    - **Challenge:** I had an issue with serving static script files located in the `/public` directory.
    - **Solution:** I decided to serve all static files in the `/public` directory using:
        ```javascript
        app.use('/public', express.static(path.join(__dirname, '../client')));
        ```
      This command serves the static files present in the `/client` directory when a request comes in with the `/public` prefix.

## License

Copyright [2023] [Farnaz Zinnah]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
