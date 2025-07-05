import { Router } from "express";
import { bookModel } from "../models/bookModel.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    const book = await bookModel.create({ title, author, publishYear });

    return res.send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await bookModel.find({});

    return res.json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);

    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }

    return res.json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await bookModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!result) {
      return res.json({
        message: "Book not found",
      });
    }

    res.json({
      message: "Book updated successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await bookModel.findByIdAndDelete(id);

    if (!result) {
      return res.json({
        message: "Book not found",
      });
    }
    res.json({
      message: "Book deleted successfully",
      result,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
});

export default router;
