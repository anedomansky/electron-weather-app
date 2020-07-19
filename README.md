# weather-app

Electron, Reat, Node app

1. set up electron.ts/main.ts for the electron app window
2. create a /build/server.ts for the node js server(express) that uses the webpack config via middleware
3. import the server.ts at the top of electron.ts/main.ts
4. add "main" entry in package.json
5. add a package.json script: "start": "tsc && electron ." and "watch": "tsc -w" in an extra console tab

backend:
"main": "main.js"
"compile": "tsc main.ts && electron ."
"electron": "cross-env NODE_ENV=dev nodemon -e main.ts --exec \"npm run compile\"",

frontend:
"ts-node ./build/server.ts"

TODO:

- wind direction arrows N, NNE, NE, ENE, E, ESE, SE, SSE, S, SSW, SW, WSW, W, WNW, NW, NNW
- app icon
- unit tests
- documentation
- publishing
