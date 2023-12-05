/**
 * Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
 * and return a list of objects where each object is unique category-wise and has total price spent as its value.
 * Transaction - an object like { itemName, category, price, timestamp }.
 * Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
 *
 * @param {Array} transactions - List of transactions
 * @returns {Array} - List of objects where each object is unique category-wise and has total price spent as its value
 */

function calculateTotalSpentByCategory(transactions) {
  let res = {};

  // Iterate through each transaction q
  for (const transaction of transactions) {
    // If the category does not exist in the result object, add it with the transaction price as its value.
    // If the category exists, add the transaction price to the existing value.
    res[transaction.category] =
      (res[transaction.category] || 0) + transaction.price;
  }

  // Convert the result object into an array of objects
  // Each object contains a category and the total amount spent on that category
  return Object.entries(res).map(([category, totalSpent]) => ({
    category, totalSpent
  }));
}

module.exports = calculateTotalSpentByCategory;