exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('recipe-ingredients')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('recipe-ingredients').insert([
				{ recipe_id: '3', ingredient_id: '1', amount: '1 tablespoon' },
				{ recipe_id: '3', ingredient_id: '4', amount: '6 pieces' },
				{ recipe_id: '1', ingredient_id: '6', amount: '1 cup' }
			]);
		});
};
