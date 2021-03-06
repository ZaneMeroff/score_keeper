# Score Keeper App 🎯
an app to keep score for any game

### Link to Live Site
http://zanemeroff.github.io/score_keeper

### Introduction
Welcome to Score Keeper, a mobile SPA (single page web application) created to keep track of scores for any kind of game. The app has many features including the ability to set score boundaries, customize player/team names, toggle light/dark mode, and save app data to localstorage.

### Why Did I Build This?
This is the most recent project I’ve created to showcase my solo programming skills. The app features clean, reusable, strictly typed code and components built with methods leveraging the single responsibility principle. The app uses a global Vuex store and the Quasar component library. Jest is used in conjunction with Vue Test Utils to create a robust and thorough unit testing suite.

### Screenshots
![screenshots](https://user-images.githubusercontent.com/53405028/124308856-1b1c9e80-db27-11eb-8eb6-8f49073d581c.png)

### Jest Testing Suite
The testing suite is almost finished (~118 unit tests so far). The last thing I have left to test is events/user interactions. After completion, the suite will have near 100% testing coverage. Coverage includes all Vuex modules as well as each Vue component with happy/sad paths as necessary for: data, methods, props, watchers, getters, lifecycle hooks, and snapshot renders. To run the testing suite and view test coverage, see instructions in "How to run the Jest testing suite with NPM" below.

### Directions for Use

`Increase/Decrease Score`<br>
Use the + or - buttons found in the center of a player card surrounding the displayed score (starts at 0). 

`Change Player Name`<br>
Select the edit button (pencil icon) left of a player's name found in the top left of each player card.

`Delete Single Player`<br>
Select the delete button (trash icon) in the top right corner of each player card.

`Add Additional Players`<br>
Select the *Add Players* button from the menu drawer (opened using hamburger button in top left of app) and enter the number of additional players. The app starts with 2 players and has a max of 50 players.

`Adjust Score Limits/Boundaries`<br>
Select the *Score Limits* button from the menu drawer and enter the desired minimum and maximum scores. The app starts with 0 as the min score and 10 as the max score. The min score's range is -500 to 0 and the max score's range is 1 to 500. Note, if a player currently has a score outside of the new score limits, the app will reset all player's scores to 0.

`Reset All Scores to Zero`<br>
Select the *Zero Scores* button from the menu drawer. This will permanently reset every player's score to 0.

`Delete All Players`<br>
Select the *Delete Players* button from the menu drawer. This will permanently delete all players from the app.

`Toggle Light/Dark Mode`<br>
Select the *Toggle Colors* button from the menu drawer. Default is dark mode.

`Clear All Saved Data`<br>
Select the *Clear Data* button from the menu drawer. This will reset all app data saved in local storage.

### Technologies Used
- Vue.js
- Vuex
- Quasar
- LocalForage
- Vue Property Decorator
- Vue Class Components
- Vue Test Utils
- Jest
- JavaScript
- TypeScript
- HTML
- CSS

### How to run app on a local machine with NPM
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. `cd` into the newly cloned repo directory
4. run `npm install`
5. run `npm run serve`
6. you should now be able to run the app in your browser-the default url is likely `http://localhost:8080`

### How to run the Jest testing suite with NPM
1. after the project has been cloned down and `npm install` has been ran, `cd` into the root directory
2. run `npm run test:unit` to run testings suite for all specs
3. if you wish to just run tests for a specific file, run `npm run test:unit <file_name>` (you don't need to include file path)

### This project was created by:
Zachary Nemeroff https://github.com/ZaneMeroff
