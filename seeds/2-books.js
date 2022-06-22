exports.seed = function (knex) {
  return knex('books').insert([
    {
      id: 1,
      title: 'The Promise',
      blurb:
        'A modern family saga written in searing prose by three-time Booker Prize-shortlisted author Damon Galgut. Haunted by an unmet promise, the Swart family loses touch after the death of their matriarch. Adrift, the lives of the three siblings move separately through the uncharted waters of South Africa; Anton, the golden boy who bitterly resents his life’s unfulfilled potential; Astrid, whose beauty is her power; and the youngest, Amor, whose life is shaped by a nebulous feeling of guilt. Reunited by four funerals over three decades, the dwindling family reflects the atmosphere of its country—one of resentment, renewal, and, ultimately, hope. The Promise is an epic drama that unfurls against the unrelenting march of national history, sure to please current fans and attract many new ones.',
      author: 1,
      cover_image: 'https://cdn2.penguin.com.au/covers/400/9781529113877.jpg',
      pub_year: 2022,
    },
  ])
}
