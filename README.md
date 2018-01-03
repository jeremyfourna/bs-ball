# bs-ball

[![NPM](https://nodei.co/npm/bs-ball.png)](https://www.npmjs.com/package/bs-ball)

## Installation

`npm i bs-ball`

## Usage

```js
const { addBallToGame, generateBallPosition } = require('bs-ball');

// Add the class 'ball' to the ball holder
const playersWithBall = addBallToGame(player, listOfPlayers);

// Display the ball inside the svg
generateBallPosition(svgZoom, ballPosition, svgElement);
```

All functions are curried.