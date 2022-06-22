/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('prizes', (table) => {
    table.increments('id').primary() //id
    table.string('name')
    table.string('country')
    table.text('about')
    table.string('link')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('prizes')
}
