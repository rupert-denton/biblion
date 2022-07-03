exports.seed = function (knex) {
  return knex('lists').insert([
    {
      id: 1,
      list_name: 'LGBTQI',
      list_description: 'Books by queer authors',
      book_id: 1,
    },
  ])
}
