exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('instructions')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('instructions').insert([
				{
					recipe_id: '3',
					step: '1',
					description: 'Add water, cumin, and paprika, then reduce to a sauce.'
				},
				{
					recipe_id: '2',
					step: '1',
					description: 'Cut vegetables into thin slices.'
				},
				{ recipe_id: '3', step: '2', description: 'Saute chicken thighs.' }
			]);
		});
};
