//Getting express router
const express = require("express");

//importing all the controllers for budget from budget controllers
const router = express.Router();
const {
  addABudget,
  getAllBudgets,
  getSumOfBudgetTypes,
  editaBudget,
  deleteABudget,
  getBudgetUsingFilters,
} = require("../controllers/budget");

//TODO: This has to be removed cause we can do the filter from the frontend itself from the central state
router.post("/getbudgetusingfilters", getBudgetUsingFilters);

//add, edit and delete budget routes
router.post("/addabudget", addABudget);
router.post("/editabudget", editaBudget);
router.post("/deleteabudget", deleteABudget);

//get all budgets and get sum of budget types to show the overview values in the Home page
//TODO: Try filtering this value too from the data provided in central state
router.get("/getallbudgets", getAllBudgets);
router.get("/getsumofbudgettype", getSumOfBudgetTypes);

module.exports = router;
