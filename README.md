# multidots
Multidots Consulting Interview

# Features / Use Cases
	- Ready to use package
	- Not so many comands
	- Convert build folder to upload on webserver
	- Minify CSS
	- Autoprefixer
	- Javascript compiler
	- Scss to Css compile files
	- Image Optimization

# Installation 
	- Clone the files from repository or using link  ( git clone https://github.com/trikeshjadhav/multidots.git ) or download from zip folder
	- After cloning the project use `npm install` to install all required dependencies

**Create localhost** </br>
	- To run the project create virtual host. If you are not familier with the localhost then please follow the link https://www.cloudways.com/blog/configure-virtual-host-on-windows-10-for-wordpress/ <br>
	- After creating the virtual host please give the app folder path to virtual host

# Usage
	- If you are done with downloading the packages and creating the virtual host. Please follow the following command with respect to run the project
	1. Go to the folder and open git bash.
	2. use `gulp` comand to run the html, css and images
	3. Now open another git bash window and use `npm start` to run the javascript files

# Editing the Project
	1. After completing the above all step you are ready to edit the project
	2. If you want to edit HTML go to the app and start editing the html files directly
	3. if you want to edit css go to the style.scss and start editing. Note.. Dont edit style.css directly. If you are doing correctly. Then after you edit the style.scss the style.css will be update automatically with all features including the minify and autoprefixer
	4. If you want to edit the javascript please edit the main.raw.js file  from app folder. If you are running the npm start then you javascript will automatically added javascript to main.js
	5. Now you are good to go. You can now easily edit the project.

# Using the project
  1. To use the project simply use `gulp build`. This comand will create a build folder to your files after removing the unnecessory files.
  2. And here we go you can now use this build folder as you final project/package.


