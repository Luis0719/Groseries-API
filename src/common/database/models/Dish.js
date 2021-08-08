'use strict';
const { Schema, model } = require('mongoose');

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const DishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    ingredients: [IngredientSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Dish', DishSchema);
