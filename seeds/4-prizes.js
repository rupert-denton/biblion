exports.seed = function (knex) {
  return knex('prizes').insert([
    {
      id: 1,
      name: 'The Booker Prize',
      country: 'English Speaking World',
      about: 1,
      link: 'https://thebookerprizes.com/',
      genre: 'Fiction',
    },
    {
      id: 2,
      name: 'The Pulitzer Prize: Fiction',
      country: 'USA',
      about:
        'For distinguished fiction published in book form during the year by an American author, preferably dealing with American life.',
      link: 'https://www.pulitzer.org/prize-winners-by-category/219/',
      genre: 'Fiction',
    },
  ])
}
