exports.seed = function (knex) {
  return knex('authorbooks').insert([
    {
      id: 1,
      book_id: 1,
      author_id: 1,
    },
  ])
}
