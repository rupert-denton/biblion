const {
  db,
  getAllBooks,
  getBooksByAuthor,
  getAllPrizes,
  getBookById,
  getBooksAndPrizes,
  getBooksByPrize,
  addBooksToPrizes,
  joinAuthorToBook,
  addurnData,
  getAuthorById,
  addBookToList,
  getAllLists,
  getBooksByList,
  getAllListsWithBooks,
  getBooksByPrizeAndYear,
  deleteJoins,
  deleteData,
} = require('./db')

const config = require('./knexfile')
const knex = require('knex')
const testDb = knex(config.test)

//get it to pristine
beforeEach(() => {
  return db.migrate.latest()
})
beforeEach(() => {
  return db.seed.run()
})

describe('getAllBooks', () => {
  it('should get all the books from db', () => {
    return getAllBooks().then((result) => {
      expect(result[0].title).toBe('The Promise')
    })
  })
})

describe('getAllPrizes', () => {
  test('gets all the awards db w', () => {
    expect.assertions(2)
    return getAllPrizes().then((result) => {
      expect(result[0].prize_name).toBe('The Booker Prize')
      expect(result[1].prize_name).toBe('The Pulitzer Prize: Fiction')
    })
  })
})

//how do i not return erroneous data from DB (eg. name conflict with prize and author)
describe('getBooksAndPrizes', () => {
  test('gets all the books that have won a prize', () => {
    expect.assertions(3)
    return getBooksAndPrizes().then((result) => {
      expect(result[0].title).toBe('The Promise')
      expect(result[1].title).toBe('Shuggie Bain')
      expect(result[2].author_name).toBe('Joshua Cohen')
    })
  })
})

describe('getBookById', () => {
  test('gets book linked to an book id', () => {
    expect.assertions(1)
    return getBookById(1).then((result) => {
      expect(result.title).toContain('The Promise')
    })
  })
})

describe('getAuthorById', () => {
  test('gets author linked to an id', () => {
    expect.assertions(1)
    return getAuthorById(1).then((result) => {
      expect(result.name).toContain('Damon Galgut')
    })
  })
})

describe('getBooksByAuthor', () => {
  test('gets all books linked to an author id', () => {
    expect.assertions(1)
    return getBooksByAuthor(3).then((result) => {
      expect(result[0].title).toContain('The Netanyahu')
    })
  })
})

describe('getBooksByPrize', () => {
  test('gets all books linked to a specific prize id', () => {
    expect.assertions(3)
    return getBooksByPrize(1).then((result) => {
      expect(result[0].title).toBe('The Promise')
      expect(result[1].title).toBe('Shuggie Bain')
      expect(result[1].name).toBe('Douglas Stuart')
    })
  })

  test('get book by prize year and id', () => {
    expect.assertions(1)
    return getBooksByPrizeAndYear(1, 2021).then((result) => {
      expect(result[0].title).toBe('The Promise')
    })
  })
})

describe('addPrize', () => {
  const prizeData = {
    prize_name: 'Nobel Prize for Literature',
    country: 'International',
    about:
      'The Nobel Prize in Literature (here meaning for literature) is a Swedish literature prize that is awarded annually, since 1901, to an author from any country who has, in the words of the will of Swedish industrialist Alfred Nobel, "in the field of literature, produced the most outstanding work in an idealistic direction". The award is based on an authors body of work as a whole.',
    link: 'https://www.nobelprize.org/prizes/literature/',
    genre: 'Various',
  }
  test('adds a new book prize to DB with the name given', () => {
    expect.assertions(2)
    return addurnData(prizeData).then((result) => {
      return testDb('prizes')
        .select()
        .then((prizes) => {
          expect(prizes).toHaveLength(3)
          expect(prizes[2].prize_name).toBe('Nobel Prize for Literature')
        })
    })
  })
})

describe('addBook', () => {
  const bookData = {
    title: 'The Koran',
    blurb: 'Cool book Lorem Ipsum',
    cover_image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    pub_year: 2002,
    genre: 'Non-Fiction',
  }
  test('adds a new book to DB', () => {
    expect.assertions(1)
    return addurnData(bookData).then((result) => {
      return testDb('books')
        .select()
        .then((books) => {
          const lastBook = books[books.length - 1]
          expect(lastBook.title).toContain('The Koran')
        })
    })
  })
})

describe('addAuthor', () => {
  const authorData = {
    name: 'Mike Muut',
    bio: 'nice guy',
    image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
  }
  test('adds a new author to DB', () => {
    return addurnData(authorData).then((result) => {
      return testDb('authors')
        .select()
        .then((authors) => {
          const lastAuthorName = authors[authors.length - 1].name
          const getlastAuthor = authors[authors.length - 1]
          expect(getlastAuthor.name).toBe(lastAuthorName)
        })
    })
  })
})

describe('addBooksToAuthors', () => {
  const bookData = {
    title: 'The Lord of The Potters',
    blurb: 'Nice Read!',
    cover_image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    pub_year: 1999,
    genre: 'Non-Fiction',
  }

  const authorData = {
    name: 'Rupert',
    bio: 'lord of the dance',
    image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
  }

  const authorById = {
    author_id: 2,
  }

  test('joins an author to a book after checking if either exist', () => {
    return joinAuthorToBook(bookData, authorById).then((result) => {
      return testDb('authorbooks')
        .select()
        .then((result) => {
          expect(result).toHaveLength(4)
        })
    })
  })
})

describe('addBooksToPrizes', () => {
  const bookData = {
    title: 'The Bible',
    blurb: 'Great book',
    cover_image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    pub_year: 1999,
    genre: 'Non-Fiction',
  }

  const authorData = {
    name: 'Jesus',
    bio: 'lord of the dance',
    image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
  }

  const prizeData = {
    prize_id: 1,
    year: 2020,
    winner: true,
    shortlist: true,
    longlist: true,
  }

  test('add books to bookprize  checking whether author/book exists before inputting', () => {
    expect.assertions(1)
    return addBooksToPrizes(bookData, authorData, prizeData).then((result) => {
      return testDb('booksprizes')
        .select()
        .then((booksprizes) => {
          expect(booksprizes).toHaveLength(4)
        })
    })
  })
})

describe('create, add books to lists, get books from lists', () => {
  test('get all lists', () => {
    expect.assertions(1)
    return getAllLists().then((result) => {
      expect(result[0].list_name).toBe('LGBTQI')
    })
  })

  test('get all lists with books', () => {
    expect.assertions(1)
    return getAllListsWithBooks().then((result) => {
      expect(result[0].title).toBe('Shuggie Bain')
    })
  })

  test('get all books associated with a list', () => {
    expect.assertions(1)
    return getBooksByList(1).then((result) => {
      expect(result).toHaveLength(2)
    })
  })

  const listData = {
    list_name: 'Critically Acclaimed Novels by African Authors',
    list_description: 'Lorem Ipsum Africa Africa',
  }

  test('adds a list to list table  DB', () => {
    expect.assertions(1)
    return addurnData(listData).then((result) => {
      return testDb('lists')
        .select()
        .then((lists) => {
          const lastListName = lists[lists.length - 1].list_name
          const getLastListName = lists[lists.length - 1]
          expect(getLastListName.list_name).toBe(lastListName)
        })
    })
  })

  test('add books to list by id', () => {
    expect.assertions(1)
    let object = {
      list_id: 1,
      book_id: 1,
    }
    return addBookToList(object).then((result) => {
      return testDb('booklists')
        .select()
        .then((booklists) => {
          expect(booklists).toHaveLength(5)
        })
    })
  })
})

describe('delete data', () => {
  test('delete joined lists', () => {
    return deleteJoins(1, ['booklists'], 'list_id').then((result) => {
      return testDb('booklists')
        .select()
        .then((booklists) => {
          expect(booklists).toHaveLength(2)
        })
    })
  })
  test('delete joined items with multiple lists', () => {
    return deleteJoins(
      2,
      ['booklists', 'booksprizes', 'authorbooks'],
      'book_id'
    ).then((result) => {
      return testDb('booksprizes')
        .select()
        .then((booksprizes) => {
          expect(booksprizes).toHaveLength(2)
        })
    })
  })
  test('delete list data by way of id', () => {
    deleteData(1, 'lists').then(() => {
      return testDb('lists')
        .select()
        .then((lists) => {
          expect(lists).toHaveLength(1)
        })
    })
  })
  test('delete book data by way of id', () => {
    return deleteData(1, 'books').then(() => {
      return testDb('books')
        .select()
        .then((books) => {
          expect(books).toHaveLength(2)
        })
    })
  })
  test('delete prizes data by way of id', () => {
    return deleteData(1, 'prizes').then(() => {
      return testDb('prizes')
        .select()
        .then((prizes) => {
          expect(prizes).toHaveLength(1)
        })
    })
  })
  test('delete authors by way of id', () => {
    return deleteData(1, 'authors').then(() => {
      return testDb('authors')
        .select()
        .then((authors) => {
          expect(authors).toHaveLength(2)
        })
    })
  })
})
