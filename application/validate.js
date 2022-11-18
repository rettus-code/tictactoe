// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const Joi = require("joi");

const extractError = error => {
  return error.details[0].message;
};

// Request body validation for the POST /users endpoint
const validateCreateUser = body => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().min(8).max(20).required(),
    username: Joi.string().min(4).max(20).required(),
    phoneNumber: Joi.string().min(4).max(20).required()
  });

  const result = Joi.validate(body, schema);
  if (result.error) {
    return {
      valid: false,
      message: extractError(result.error)
    };
  }
  return {
    valid: true
  };
};

// Request body validation for the POST /games endpoint
const validateCreateGame = body => {
  const schema = Joi.object().keys({
    opponent: Joi.string().min(4).max(20).required()
  });

  const result = Joi.validate(body, schema);
  if (result.error) {
    return {
      valid: false,
      message: extractError(result.error)
    };
  }
  return {
    valid: true
  };
};

// Request body validation for the POST /games/:gameIdendpoint
const validatePerformMove = body => {
  const schema = Joi.object().keys({
    changedHeap: Joi.string().valid('r1c1', 'r1c2', 'r1c3','r2c1', 'r2c2', 'r2c3','r3c1', 'r3c2', 'r3c3').required(),
    changedHeapValue: Joi.valid('x', 'o').required()
  });

  const result = Joi.validate(body, schema);
  if (result.error) {
    return {
      valid: false,
      message: extractError(result.error)
    };
  }
  return {
    valid: true
  };
};

module.exports = {
  validateCreateUser,
  validateCreateGame,
  validatePerformMove
};
