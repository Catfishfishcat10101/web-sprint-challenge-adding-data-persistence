/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', function(table) {
        table.increments('id').primary();
        table.integer('project_id').unsigned().references('project_id').inTable('project_resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        table.integer('resource_id').unsigned().references('resource_id').inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        table.timestamp('assigned_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
  
};
