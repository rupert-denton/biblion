exports.seed = function (knex) {
  return knex('booksprizes').insert([
    {
      id: 1,
      prize_id: 1,
      author_id: 1,
      winner: true,
      shortlist: true,
      longlist: true,
      year: 2021,
    },
  ])
}
