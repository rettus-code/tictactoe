// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const sendMessage = require('./sendMessage')

const handlePostMoveNotification = async ({ game, mover, opponent }) => {
  // Handle when game is finished
  let xs = false;
  let os = false;
  let noone = false;
  if(game.r1c1 == 'x' && game.r1c2 == 'x' && game.r1c3 == 'x' || game.r2c1 == 'x' && game.r2c2 == 'x' && game.r2c3 || game.r3c1 == 'x' && game.r3c2 == 'x' && game.r3c3){
    xs = true;
  }
  if(game.r1c1 == 'x' && game.r2c1 == 'x' && game.r3c1 == 'x' || game.r1c2 == 'x' && game.r2c2 == 'x' && game.r3c2 || game.r1c3 == 'x' && game.r2c3 == 'x' && game.r3c3){
    xs = true;
  }
  if(game.r1c1 == 'x' && game.r2c2 == 'x' && game.r3c3 == 'x' || game.r1c3 == 'x' && game.r2c2 == 'x' && game.r3c1){
    xs = true;
  }
  if(game.r1c1 == 'o' && game.r1c2 == 'o' && game.r1c3 == 'o' || game.r2c1 == 'o' && game.r2c2 == 'o' && game.r2c3 || game.r3c1 == 'o' && game.r3c2 == 'o' && game.r3c3){
    os = true;
  }
  if(game.r1c1 == 'o' && game.r2c1 == 'o' && game.r3c1 == 'o' || game.r1c2 == 'o' && game.r2c2 == 'o' && game.r3c2 || game.r1c3 == 'o' && game.r2c3 == 'o' && game.r3c3){
    os = true;
  }
  if(game.r1c1 == 'o' && game.r2c2 == 'o' && game.r3c3 == 'o' || game.r1c3 == 'o' && game.r2c2 == 'o' && game.r3c1){
    os = true;
  }
  if(game.r1c1 != ' ' && game.r1c2 != ' ' && game.r1c3 != ' ' && game.r2c1 != ' ' && game.r2c2 != ' ' && game.r2c3 != ' ' && game.r3c1 != ' ' && game.r3c2 != ' ' && game.r3c3 != ' '){
    noone = true;
  }

  if (xs) {
    const winnerMessage = "x's won o's lost";
    await Promise.all([
      sendMessage({ phoneNumber: opponent.phoneNumber, message: winnerMessage }),
      sendMessage({ phoneNumber: mover.phoneNumber, message: winnerMessage })
    ])
    return
  }
  if (os) {
    const winnerMessage = "o's won x's lost";
    await Promise.all([
      sendMessage({ phoneNumber: opponent.phoneNumber, message: winnerMessage }),
      sendMessage({ phoneNumber: mover.phoneNumber, message: winnerMessage })
    ])
    return
  }
  if (noone) {
    const winnerMessage = "Nobody wins";
    await Promise.all([
      sendMessage({ phoneNumber: opponent.phoneNumber, message: winnerMessage }),
      sendMessage({ phoneNumber: mover.phoneNumber, message: winnerMessage })
    ])
    return
  }
  const message = `${mover.username} has moved. It's your turn next in Game ID ${game.gameId}!`
  await sendMessage({ phoneNumber: opponent.phoneNumber, message })
};

module.exports = handlePostMoveNotification;