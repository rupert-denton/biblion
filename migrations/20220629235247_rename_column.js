/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('prizes', (table) => {
    table.renameColumn('name', 'prize_name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('prizes', (table) => {
    table.renameColumn('prize_name', 'name')
  })
}
