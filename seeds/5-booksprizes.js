exports.seed = function (knex) {
  return knex('booksprizes').insert([
    {
      id: 1,
      prize_id: 1,
      author_id: 1,
      book_id: 1,
      winner: true,
      shortlist: true,
      longlist: true,
      year: 2021,
    },
    {
      id: 2,
      prize_id: 1,
      author_id: 2,
      book_id: 2,
      winner: true,
      shortlist: true,
      longlist: true,
      year: 2020,
    },
    {
      id: 3,
      prize_id: 2,
      author_id: 3,
      book_id: 3,
      winner: true,
      shortlist: true,
      longlist: true,
      year: 2022,
    },
  ])
}
