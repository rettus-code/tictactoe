// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

const performMove = async ({ gameId, user, changedHeap, changedHeapValue }) => {
  if (changedHeapValue != 'x' && changedHeapValue != 'o') {
    throw new Error("you may only enter 'x' or 'o'");
  }
  const params = {
    TableName: 'TicTacToe-game',
    Key: { 
      gameId: gameId
    },
    UpdateExpression: `SET lastMoveBy = :user, ${changedHeap} = :changedHeapValue`,
    ConditionExpression: `(user1 = :user OR user2 = :user) AND lastMoveBy <> :user`,
    ExpressionAttributeValues: {
      ':user': user,
      ':changedHeapValue': changedHeapValue
    },
    ReturnValues: 'ALL_NEW'
  };
  console.log()
  try {
    const resp = await documentClient.update(params).promise()
    console.log('Updated game: ', resp.Attributes)
  } catch (error) {
    console.log('Error updating item: ', error.message)
  }
}

performMove({ gameId: '5b5ee7d8', user: 'theseconduser', changedHeap: "r1c1", changedHeapValue: 'x' })
