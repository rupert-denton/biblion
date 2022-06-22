exports.seed = function (knex) {
  return knex('authors').insert([
    {
      id: 1,
      name: 'Damon Galgut',
      bio: 'Damon Galgut is a South African playwright and novelist, who wrote his first novel aged 17. He has been shortlisted three times for the Booker Prize and won in 2021 for his ninth book, The Promise.',
      image:
        'https://opencountrymag.com/wp-content/uploads/2022/02/Damon-Galgut-by-Michaela-Verity-2.jpg',
    },
  ])
}
