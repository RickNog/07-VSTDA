# 07-VSTDA

In this project, I built a Todo app using AngularJS that allows users to enter their todo items and prioritize them based on their importance.

The app will then allow users to sort their todo items based on the priority, or by alphabetical order.

##Mockup:
<img src="http://i.imgur.com/vhMYF1s.png" />

## Tasks
1. Created an `index.html` file with the gulp-inject comments needed to inject the script and link tags for my application dependencies and custom html, js and css. Added gulpfile.js, package.json and bower.json and the needed directory structure to support auto-reload and script injection during local development. Added a .gitignore file to the root directory to exclude the `bower_components and node_modules` folders from version control.
2. Designed my HTML page to look mockup using Bootstrap design framework.
3. Made use of the following AngularJS features to build this application.
	- Two way data binding using the `ng-model` directive and one way data binding using the `{{}}` bindings (moustache bindings!).
	- Click event binding using the `ng-click` directive.
	- Dynamic CSS using the `ng-class` directive.
	- Iteration using the `ng-repeat` directive.
	- Filtering using Angular Filters. (Research what these are first!)
