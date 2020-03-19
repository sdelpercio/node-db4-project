exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ name: 'Cumin', type: 'Spice' },
				{ name: 'Parsley', type: 'Vegetable' },
				{ name: 'Water', type: 'Liquid' },
				{ name: 'Chicken Thighs', type: 'Meat' },
				{ name: 'Paprika', type: 'Spice' },
				{ name: 'Flour', type: 'Powder' }
			]);
		});
};
