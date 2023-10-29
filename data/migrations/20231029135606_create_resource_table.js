/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('resources', function(table) {
        table.increments('resource_id').primary();
        table.string('resource_name').notNullable();
        table.text('resource_description').nullable
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
