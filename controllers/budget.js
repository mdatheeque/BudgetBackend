const Budget = require("../models/budget");

//******************************
//CREATE
//******************************

//add a budget
exports.addABudget = (req, res) => {
  const budget = new Budget(req.body);
  budget.save((err, budget) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB" + err,
      });
    }
    res.json({
      id: budget._id,
      budgetType: budget.budgetType,
      budgetTypesType: budget.budgetTypesType,
      category: budget.category,
      budgetReceivedThroughOrUsedOn: budget.budgetReceivedThroughOrUsedOn,
      comments: budget.comments,
      amount: budget.amount,
    });
  });
};

//******************************
//READ
//******************************

//export all budgets
exports.getAllBudgets = (req, res) => {
  Budget.find({}).exec((err, budgets) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB" + err,
      });
    }
    res.json({
      budgets: budgets,
    });
  });
};

//get sum of budget Types
exports.getSumOfBudgetTypes = (req, res) => {
  Budget.aggregate(
    [
      {
        $group: {
          _id: `$budgetType`,
          total: {
            $sum: "$amount",
          },
        },
      },
    ],
    function (err, result) {
      if (err) {
        return res.send(err);
      } else {
        return res.json(result);
      }
    }
  );
};

//find by filters
exports.getBudgetUsingFilters = (req, res) => {
  Budget.find(req.body, (err, result) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB" + err,
      });
    }
    res.json({
      result: result,
    });
  });
};

//******************************
//UPDATE
//******************************

//edit budget
exports.editaBudget = (req, res) => {
  Budget.findOneAndUpdate({ _id: req.body.id }, req.body, (err, result) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB" + err,
      });
    }
    res.json({
      result: result,
    });
  });
};

//******************************
//DELET
//******************************

//delete budget
exports.deleteABudget = (req, res) => {
  Budget.findOneAndDelete({ _id: req.body.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB" + err,
      });
    }
    res.json({
      result: result,
    });
  });
};
