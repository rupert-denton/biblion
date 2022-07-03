exports.seed = (knex) => {
  return knex('authorbooks')
    .del()
    .then(() => knex('booksprizes').del())
    .then(() => knex('booklists').del())
    .then(() => knex('prizes').del())
    .then(() => knex('lists').del())
    .then(() => knex('authorbooks').del())
    .then(() => knex('books').del())
    .then(() => knex('authors').del())
}
