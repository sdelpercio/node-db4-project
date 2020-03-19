exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increment();
			tbl.string('name', 255).notNullable();
			tbl.string('cook_time', 255);
			tbl.string('difficulty', 255);
		})
		.createTable('ingredients', tbl => {
			tbl.increment();
			tbl.string('name', 255).notNullable();
			tbl.string('type', 255);
		})
		.createTable('recipe-ingredients', tbl => {
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
			tbl.string('amount', 255);
		})
		.createTable('instructions', tbl => {
			tbl.increment();
			tbl.integer('step').notNullable();
			tbl.text('description').notNullable();
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {};
