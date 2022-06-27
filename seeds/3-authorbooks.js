exports.seed = function (knex) {
  return knex('authorbooks').insert([
    {
      id: 1,
      book_id: 1,
      author_id: 1,
    },
    {
      id: 2,
      book_id: 2,
      author_id: 2,
    },
    {
      id: 3,
      book_id: 3,
      author_id: 3,
    },
  ])
}
