//Getting express router
const express = require("express");
const router = express.Router();
const {
  addABudget,
  getAllBudgets,
  getSumOfBudgetTypes,
  editaBudget,
  deleteABudget,
  getBudgetUsingFilters,
} = require("../controllers/budget");

router.post("/getbudgetssingfilters", getBudgetUsingFilters);
router.post("/addabudget", addABudget);
router.post("/editabudget", editaBudget);
router.post("/deleteabudget", deleteABudget);

router.get("/getallbudgets", getAllBudgets);
router.get("/getsumofbudgettype", getSumOfBudgetTypes);

module.exports = router;
