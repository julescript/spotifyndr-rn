# Spotifyndr
my first react-native project.

#### Brief:
Spotify API driven react-native app that allows you to discover Spotify artists.

## Project Status
This project is currently in development. Users can search for Spotify artists and see their albums.

## Spotifyndr Preview
  | Landing  | Home/Search  |
  | -----------------| -----|
  | ![Landing](/demo/Landing_Page.png) | ![Home/Search](/demo/Search_Page.png) |

This design was planned before on paper heavily influenced by the original [Spotifyndr](https://https://github.com/julescript/spotifyndr) design, then moved to Sketch app for the fine details.
Note that i didn't use any styling library or theme.

| Artists results  | Artist's Albums  |
| -----------------| -----|
| ![Artists results](/demo/Artists_Page.png) | ![Artist's Albums](/demo/Albums_Page.png) |


## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:
`npm install`  

To Start Expo Server:
`npm start`  

## Reflection

This was a sequel challenge project for the original [Spotifyndr](https://https://github.com/julescript/spotifyndr) react web app (from Design to Dev) built during a quarantine week. Project goals included using react-native core concepts learned up until this point and familiarizing myself with documentation for new features.  

At the end of the day, the technologies implemented in this project are React, React-Navigation, Redux, Axios and a significant amount of VanillaJS, JSX. I chose to use the `expo-cli` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.

## Future goals for this project

* Add dark mode
* Add more search capabilities like searching for music and albums directly
* Add `redux-thunk` for async auth in redux
* Add ability to preview music right from the app
* Add internalization using the `i18n` package