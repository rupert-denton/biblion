exports.seed = (knex) => {
  return knex('authorbooks')
    .del()
    .then(() => knex('booksprizes').del())
    .then(() => knex('prizes').del())
    .then(() => knex('authorbooks').del())
    .then(() => knex('books').del())
    .then(() => knex('authors').del())
}
