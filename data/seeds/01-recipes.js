exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('recipes')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('recipes').insert([
				{ name: 'Fried Chicken', cook_time: '1 hour', difficulty: 'medium' },
				{ name: 'Ratatouille', cook_time: '3 hours', difficulty: 'hard' },
				{
					name: 'Chicken Curry',
					cook_time: '1 1/2 hours',
					difficulty: 'medium'
				}
			]);
		});
};
