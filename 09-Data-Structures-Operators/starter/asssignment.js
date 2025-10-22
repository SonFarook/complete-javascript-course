'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

////////////////////////////////////////////
// 1. Assignment

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingCount]] = ratings;
// console.log(rating, ratingCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

////////////////////////////////////////////
// 2. Assignment

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// const { keywords: tags } = books[0];
// console.log(tags);

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// console.log(bookRating);

// const printBookInfo = function ({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// };

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

////////////////////////////////////////////
// 3. Assignment

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// const spellWord = function (word) {
//   console.log(...word);
// };

// spellWord('JavaScript');

////////////////////////////////////////////
// 4. Assignment

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// };

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

////////////////////////////////////////////
// 5. Assignment

// const hasExamplesInJava = function (book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// };

// console.log(hasExamplesInJava(books[0]));
// console.log(hasExamplesInJava(books[1]));

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);
// }

////////////////////////////////////////////
// 6. Assignment

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title}" provides no data about its online content`);
// }

////////////////////////////////////////////
// 7. Assignment

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

////////////////////////////////////////////
// 8. Assignment

// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }

// const allAuthors = [];

// for (const book of books) {
//   typeof book.author === 'string'
//     ? allAuthors.push(book.author)
//     : allAuthors.push(...book.author);
// }

// for (const [index, value] of allAuthors.entries()) {
//   console.log(`${index + 1}. ${value}`);
// }

////////////////////////////////////////////
// 9. Assignment

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

////////////////////////////////////////////
// 10. Assignment

// const getFirstKeyword = function (book) {
//   return book.keywords?.[0];
// };

// console.log(getFirstKeyword(books[0]));
// console.log(getFirstKeyword(newBook2));

////////////////////////////////////////////
// 11. Assignment

// const entries = [];

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push(key);
// }

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }

// let entries2 = [];

// entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

////////////////////////////////////////////
// 12. Assignment

// const allKeywords = [];

// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }

// const uniqueKeywords = new Set(allKeywords);

// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');

// uniqueKeywords.delete('business');

// const uniqueKeywordsArr = [...uniqueKeywords];

// uniqueKeywords.clear();

////////////////////////////////////////////
// 13. Assignment

// const bookMap = new Map();

// bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');

// bookMap.set('pages', 464);

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// console.log(bookMap.size);

// bookMap.has('author') && console.log('The author of the book is known');

////////////////////////////////////////////
// 14. Assignment

// const firstBookMap = new Map(Object.entries(books[0]));

// for (const [key, value] of firstBookMap) {
//   typeof value === 'number' && console.log(key);
// }

////////////////////////////////////////////
// 15. Assignment

// const ISBN = books[0].ISBN;
// console.log(ISBN[4], ISBN[6], ISBN[8], ISBN[9]);

// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));

// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// const isContributor = function (authorName) {
//   return authorName.slice(authorName.lastIndexOf(' ') + 1) === '(Contributor)';
// };

// console.log(isContributor('Julie Sussman (Contributor)'));
// console.log(isContributor('Robert Sedgewick'));

////////////////////////////////////////////
// 16. Assignment

// const normalizeAuthorName = function (authorName) {
//   const trimmedAuthor = authorName.trim();
//   let slicedAuthor = ' ';
//   if (trimmedAuthor.includes('(Contributor)'))
//     slicedAuthor = trimmedAuthor.slice(0, trimmedAuthor.lastIndexOf(' '));

//   const lowerAuthor = slicedAuthor.toLowerCase();
//   const capsFixedAuthor =
//     lowerAuthor[0].toUpperCase() +
//     lowerAuthor.slice(1, lowerAuthor.indexOf(' ') + 1) +
//     lowerAuthor[lowerAuthor.indexOf(' ') + 1].toUpperCase() +
//     lowerAuthor.slice(lowerAuthor.indexOf(' ') + 2).toLowerCase();

//   console.log(capsFixedAuthor);
// };

// normalizeAuthorName('  JuliE sussMan (Contributor)');

// const newBookTitle = books[1].title.replace('Programs', 'Software');

// const logBookTheme = function (title) {
//   title = title.toLowerCase();

//   if (title.startsWith('computer')) console.log('This book is about computers');
//   else if (title.includes('algorithms') && title.includes('structures'))
//     console.log('This book is about algorithms and data structures');
//   else if (
//     title.endsWith('system') ||
//     (title.endsWith('systems') && !title.includes('operating'))
//   )
//     console.log(
//       'This book is about some systems, but definitely not about operating systems',
//     );
// };

// logBookTheme('ASDJAKLSDJ');

////////////////////////////////////////////
// 17. Assignment

// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

// const logBookCategories = function (categories) {
//   const separateCategories = categories.split(';');

//   for (const categorie of separateCategories) {
//     console.log(categorie);
//   }
// };

// // logBookCategories(bookCategories);

// const getKeywordsAsString = function () {
//   let keywords = [];
//   for (const book of books) {
//     keywords.push(book.keywords);
//   }
//   keywords = [...new Set(...keywords)];
//   return keywords.join(';');
// };

// console.log(getKeywordsAsString());

// const logBookChapters = function (bookChapters) {
//   for (const [key, value] of bookChapters) {
//     console.log(key.padEnd(20, '_') + '' + value);
//   }
// };

// const bookChapters = [
//   ['The Basics', 14],
//   ['Sorting', 254],
//   ['Searching', 372],
//   ['Graphs', 526],
//   ['Strings', 706],
// ];

// logBookChapters(bookChapters);
