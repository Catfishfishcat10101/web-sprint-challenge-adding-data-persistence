/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(table) {
        table.increments('task_id').primary()
        table.text('task_description').notNullable()
        table.text('task_notes').nullable()
        table.boolean('task_completed').defaultTo(false).notNullable()
        table.integer('task_id').unsigned().references('task_id').inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists(tasks);
};
