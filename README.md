# crossovertest

<h2>Setup</h2>
1. Extract the project crossovertest
2. npm install (Run this command at the level of package.json file)
3. node app.js (start the server)
4. http://localhost:3000/ (launch the application in browser)

<h2>Run Unit Tests</h2>
1. npm install -g karma-cli (install karma cli)
2. karma start (start the karma server)
3. karma launches chrome 
4. click on debug button in chrome.
5. View the unit test results

<h2>Features</h2>
1. Written custom angular diretcive and implemented (expand/collapse accodian table)
2. Written sass and used grunt-sass module to compile sass to css
3. Minified the js files using grunt-uglify module
4. Used npm for project packagement
5. Used grunt as task runner
6. Used karma as test runner
7. written units using jasmine

<h2>Frameworks</h2>
1. AngularJS

<h2>Testing</h2>
1. Chrome - pass
2. Firefox - pass
3. Safari - pass

<h2>Known Issues</h2>
1. pie chart will not be displayed in >IE10 (used HTML5 canvas to render piechart)

<h2>Enhancements</h2>
1. Write polyfill for piechart in >IE10
2. Create image sprites
3. Write more unit test cases to cover edge cases
