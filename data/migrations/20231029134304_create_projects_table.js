/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('project_id').primary();
        table.string('project_name').notNullable();
        table.text('project_description').nullable();
        table.boolean('project_completed').defaultTo(false).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
  
};
