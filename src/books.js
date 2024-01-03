function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  // Uses the find method to compare the supplied ID with one in the existing authors array and returns it.
  let authorById = authors.find((author) => author.id === id)
  return authorById
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  // Uses the find method to compare the supplied id with one in the existing books array and returns it.
  let bookById = books.find((book) => book.id === id)
  return bookById
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
