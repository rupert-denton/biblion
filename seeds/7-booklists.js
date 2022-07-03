exports.seed = function (knex) {
  return knex('booklists').insert([
    {
      id: 1,
      list_id: 1,
      book_id: 2,
    },
    {
      id: 2,
      list_id: 1,
      book_id: 3,
    },
  ])
}
