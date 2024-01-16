//Author: Jainil Sevalia(jn498899@dal.ca) || Banner Id: B00925445

const express = require("express");
const router = express.Router();
const {
  addExpense,
  getAllExpenses,
  updateExpense,
  getExpense,
  deleteExpense,
  payExpense,
} = require("../Controllers/expense.controller");

router.post("/add", addExpense);
router.get("/:tripId", getAllExpenses);
router.patch("/update/:id", updateExpense);
router.delete("/delete/:id", deleteExpense);
router.get("/get/:id", getExpense);
router.post("/pay", payExpense);

module.exports = router;
