exports.seed = function (knex) {
  return knex('authors').insert([
    {
      id: 1,
      name: 'Damon Galgut',
      bio: 'Damon Galgut is a South African playwright and novelist, who wrote his first novel aged 17. He has been shortlisted three times for the Booker Prize and won in 2021 for his ninth book, The Promise.',
      image:
        'https://opencountrymag.com/wp-content/uploads/2022/02/Damon-Galgut-by-Michaela-Verity-2.jpg',
    },
    {
      id: 2,
      name: 'Douglas Stuart',
      bio: 'Douglas Stuart is a Scottish-American author. His New York Times-bestselling debut novel Shuggie Bain won the 2020 Booker Prize and the Sue Kaufman Prize from the American Academy of Arts and Letters. It was the winner of two British Book Awards, including Book of the Year, and was a finalist for the National Book Award, PEN/Hemingway Award, National Book Critics Circle John Leonard Prize, Kirkus Prize, as well as several other literary awards. Stuart’s writing has appeared in the New Yorker and Literary Hub.',
      image:
        'https://groveatlantic.com/core/wp-content/uploads/2019/03/Douglas-Stuart-Photo_-Martyn-Pickersgill-318x318.jpg',
    },
    {
      id: 3,
      name: 'Joshua Cohen',
      bio: 'Joshua Cohen was born in 1980 in Atlantic City. His books include the novels Moving Kings, Book of Numbers, Witz, A Heaven of Others, and Cadenza for the Schneidermann Violin Concerto; the short-fiction collection Four New Messages, and the nonfiction collection Attention: Dispatches from a Land of Distraction. Cohen was awarded Israel’s 2013 Matanel Prize for Jewish Writers, and in 2017 was named one of Granta’s Best Young American Novelists. He lives in New York City.',
      image:
        'https://dev.lareviewofbooks.org/wp-content/uploads/2017/09/joshuacohen.png',
    },
  ])
}
