/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function findRecipe(pieType) {
  return recipes[pieType];
}

function bakePies(pieType, pieQuantity, recipe) {
  for (let i = 0; i < pieQuantity; i++) {
    let combiningMsg = `Combining ingredients for ${pieType}: `;
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);
    console.log(`Baked pie ${i + 1}!`);
  }
}

function calculateCost(recipe) {
  return recipe.reduce((prev, current) => prev + current.cost, recipe[0].cost);
}

function calculateRevenue(totalCost, pieQuantity, profitMargin = 1.2) {
  return totalCost * profitMargin;
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = findRecipe(pieType);
  bakePies(pieType, pieQuantity, recipe);
  const costOfPie = calculateCost(recipe);
  console.log(`Cost per pie: ${costOfPie}`);
  const totalCost = costOfPie * pieQuantity;
  const revenue = calculateRevenue(totalCost, pieQuantity, profitMargin);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};