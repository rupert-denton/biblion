exports.seed = function (knex) {
  return knex('prizes').insert([
    {
      id: 1,
      name: 'The Booker Prize',
      country: 'English Speaking World',
      about: 1,
      link: 'https://thebookerprizes.com/',
    },
  ])
}
