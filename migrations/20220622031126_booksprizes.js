/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('booksprizes', (table) => {
    table.increments('id').primary() //id
    table.integer('prize_id').references('prizes.id')
    table.integer('book_id').references('books.id')
    table.integer('author_id').references('authors.id')
    table.boolean('winner')
    table.boolean('shortlist')
    table.boolean('longlist')
    table.integer('year')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('booksprizes')
}
