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
    {
      id: 3,
      list_id: 2,
      book_id: 2,
    },
    {
      id: 4,
      list_id: 2,
      book_id: 3,
    },
  ])
}
