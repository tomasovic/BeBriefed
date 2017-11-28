# BeBriefed
External API

React native vector icons https://github.com/oblador/react-native-vector-icons
npm install react-native-vector-icons --save
after that we need to link to our project
react-native link
After link, there has to be an app/assets/font folder in an android project.
https://github.com/GeekyAnts/NativeBase/issues/76#issuecomment-234800969


Debugging https://github.com/facebook/react-devtools/tree/master/packages/react-devtools

Tabs
npm install react-native-tabs --save

By default icons for the Tab bar on the Android are cutt off so this is a must
iconStyle={{ height: 72 }} to be placed for Tabs in the TabBarContainer

Linear gradient 
npm i --save react-native-linear-gradient
react-native link

Folder API_SERVER is fake node.js api server - using for BeBriefed app.
Install the server > npm i
Start the server > node index.js