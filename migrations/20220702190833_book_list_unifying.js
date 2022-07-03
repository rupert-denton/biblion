/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('booklists', (table) => {
    table.increments('id').primary() //id
    table.integer('book_id').references('books.id')
    table.integer('list_id').references('lists.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('booklists')
}
