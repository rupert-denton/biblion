/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('lists', (table) => {
    table.increments('id').primary() //id
    table.string('list_name')
    table.text('list_description')
    table.integer('book_id').references('books.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('lists')
}
