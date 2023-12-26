import mongoose from "mongoose";

// schema
const bookSchema = mongoose.Schema(
  // fields object
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  // timestam object
  {
    timestamps: true,
  }
);

// use schema for model
export const Book = mongoose.model("Cat", bookSchema);
