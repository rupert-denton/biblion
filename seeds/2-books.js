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
      genre: 'Literary Fiction',
    },
    {
      id: 2,
      title: 'Shuggie Bain',
      blurb:
        'It is 1981. Glasgow is dying and good families must grift to survive. Agnes Bain has always expected more from life. She dreams of greater things: a house with its own front door and a life bought and paid for outright (like her perfect, but false, teeth). But Agnes is abandoned by her philandering husband, and soon she and her three children find themselves trapped in a decimated mining town. As she descends deeper into drink, the children try their best to save her, yet one by one they must abandon her to save themselves. It is her son Shuggie who holds out hope the longest. Douglas Stuarts Shuggie Bain lays bare the ruthlessness of poverty, the limits of love, and the hollowness of pride. A counterpart to the privileged Thatcher-era London of Alan Hollinghursts The Line of Beauty, it is a blistering debut by a brilliant novelist with a powerful and important story to tell.',
      author: 2,
      cover_image:
        'https://www.biblioimages.com/macmillanaus/getimage.aspx?class=books&assetversionid=661247&cat=default&size=large&id=45558',
      pub_year: 2020,
      genre: 'Literary Fiction',
    },
    {
      id: 3,
      title:
        'The Netanyahus: An Account of a Minor and Ultimately Even Negligible Episode in the History of a Very Famous Family',
      blurb:
        'Corbin College, not quite upstate New York, winter 1959–1960: Ruben Blum, a Jewish historian—but not an historian of the Jews—is co-opted onto a hiring committee to review the application of an exiled Israeli scholar specializing in the Spanish Inquisition. When Benzion Netanyahu shows up for an interview, family unexpectedly in tow, Blum plays the reluctant host to guests who proceed to lay waste to his American complacencies. Mixing fiction with nonfiction, the campus novel with the lecture, The Netanyahus is a wildly inventive, genre-bending comedy of blending, identity, and politics that finds Joshua Cohen at the height of his powers.',
      author: 3,
      cover_image:
        'https://cdn.shopify.com/s/files/1/0726/9203/products/Netanyahus_pulitzer4_2048x2048.jpg?v=1653061963',
      pub_year: 2021,
      genre: 'Literary Fiction',
    },
  ])
}
