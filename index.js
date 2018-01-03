const R = require('ramda');
const { createCircle } = require('bs-geometric-forms');

function addBallToGame(player, allPlayers) {
  const ballPosition = R.prop(player, R.pick([player], allPlayers));

  return R.assoc('className', 'ball', ballPosition);
}

function generateBallPosition(wishedZoom, ballPosition, context) {
  return createCircle(
    R.prop('x', ballPosition),
    R.prop('y', ballPosition),
    R.multiply(wishedZoom, 0.25),
    'black',
    'orange',
    R.prop('className', ballPosition),
    context
  );
}

exports.addBallToGame = R.curry(addBallToGame);
exports.generateBallPosition = R.curry(generateBallPosition);
