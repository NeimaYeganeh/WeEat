Hey guys I am using this README file to convey my goals for this branch...
Right now our application is a mix of HTML/CSS/JavaScript, I plan to revamp 
this into a React project

This folder (src) can be dropped into a default react application and it 
should work. Follow the steps below:

STEP 0: NPM
- if you do not have NPM installed (i cannot remember if i always had it or 
  had to install) you should download it now

STEP 1: Create a react application
- run 'npx create-react-app <appname>' from the commandline (appname cannot 
  contain uppercase)

STEP 2: Download dependencies
- for this application I used the following libraries that you must download
  by running the expressed code on the cmdline within your react project
  1. Bootstrap: 'npm install bootstrap'
  2. react-map-gl: 'npm install react-map-gl'

STEP 3: File hierarchy
- replace the folder titled 'src' with this one
- on the cmdline run 'npm start'
	- this should open up the application with your default browser on 
	  localhost:3000