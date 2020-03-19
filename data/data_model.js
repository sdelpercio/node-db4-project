const db = require('./db_config');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};

function getRecipes() {
	return db('recipes');
}
function getShoppingList(recipe_id) {
	return db('recipes as r')
		.join('recipe-ingredients as ri', 'r.id', '=', 'ri.recipe_id')
		.join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
		.select('r.name', 'i.name', 'ri.amount')
		.where({
			'r.id': recipe_id
		});
}
function getInstructions(recipe_id) {
	return db('instructions as i')
		.join('recipes as r', 'i.recipe_id', '=', 'r.id')
		.select('r.name', 'i.step', 'i.description')
		.where({
			'i.recipe_id': recipe_id
		})
		.orderBy('i.step');
}
