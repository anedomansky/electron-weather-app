# weather-app

![Node.js CI](https://github.com/anedomansky/weather-app/workflows/Node.js%20CI/badge.svg)  ![Build/release](https://github.com/anedomansky/weather-app/workflows/Build/release/badge.svg)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a simple weather-app made with the help of [Electron](https://github.com/electron/electron) and [React](https://github.com/facebook/react). The weather data is provided by [MetaWeather](https://www.metaweather.com/api/).

## Installation

Either get the latest installation file from the [releases section](https://github.com/anedomansky/weather-app/releases) or follow these steps in order to build your installation file manually:

### Requirements

- Node (at least v12.18.3)
- npm (at least 6.14.6)

### Build your own installation file

1. `git clone` the repository
2. `npm install`
3. Use `npm run build` in order to bundle the project files
4. Finally use `npm run dist` in order to create your platform specific installation files
5. Now you can find your files in the `release`-folder
