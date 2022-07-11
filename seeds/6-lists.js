exports.seed = function (knex) {
  return knex('lists').insert([
    {
      id: 1,
      list_name: 'LGBTQI',
      list_description: 'Books by queer authors',
    },
    {
      id: 2,
      list_name: 'Religious Books',
      list_description: 'Books by religious authors',
    },
  ])
}
