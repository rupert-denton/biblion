const {
  db,
  getAllBooks,
  getBooksByAuthor,
  getAllPrizes,
  getBooksAndPrizes,
  getBooksByPrize,
  addPrize,
  addBooksToPrizes,
} = require('./db')

const config = require('./knexfile')
const knex = require('knex')
const testDb = knex(config.test)

//get it to pristine
beforeAll(() => {
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
      expect(result[0].name).toBe('The Booker Prize')
      expect(result[1].name).toBe('The Pulitzer Prize: Fiction')
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

describe('getBooksByAuthor', () => {
  test('gets all books linked to an author', () => {
    expect.assertions(1)
    return getBooksByAuthor('Joshua Cohen').then((result) => {
      expect(result[0].title).toContain('The Netanyahu')
    })
  })
})

describe('getBooksByPrize', () => {
  test('gets all books linked to a specific prize', () => {
    expect.assertions(3)
    return getBooksByPrize('The Booker Prize').then((result) => {
      expect(result[0].title).toBe('The Promise')
      expect(result[1].title).toBe('Shuggie Bain')
      expect(result[1].name).toBe('Douglas Stuart')
    })
  })
})

describe('addPrize', () => {
  const prizeData = {
    name: 'Nobel Prize for Literature',
    country: 'International',
    about:
      'The Nobel Prize in Literature (here meaning for literature) is a Swedish literature prize that is awarded annually, since 1901, to an author from any country who has, in the words of the will of Swedish industrialist Alfred Nobel, "in the field of literature, produced the most outstanding work in an idealistic direction". The award is based on an authors body of work as a whole.',
    link: 'https://www.nobelprize.org/prizes/literature/',
    genre: 'Various',
  }
  test('adds a new book prize to DB with the name given', () => {
    expect.assertions(2)
    return addPrize(prizeData).then((result) => {
      return testDb('prizes')
        .select()
        .then((prizes) => {
          expect(prizes).toHaveLength(3)
          expect(prizes[2].name).toBe('Nobel Prize for Literature')
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
    prize_name: 'The Booker Prize',
    year: 2020,
    winner: true,
    shortlist: true,
    longlist: true,
  }

  test('add books to bookprize, books and authorbooks tables checking whether author/book exists before inputting', () => {
    expect.assertions(1)
    return addBooksToPrizes(authorData, bookData, prizeData).then((result) => {
      return testDb('booksprizes')
        .select()
        .then((booksprizes) => {
          console.log(booksprizes)
          expect(booksprizes).toHaveLength(4)
        })
    })
  })
})
