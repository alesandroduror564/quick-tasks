/*
Filename: complex_code.js

Description: 
This code demonstrates a complex and sophisticated JavaScript application that simulates a virtual library management system. It includes classes for managing books, authors, library members, borrowing, returning, and searching functionalities. The code is designed to be scalable and maintainable.

Note: This code is only a representation and doesn't include all possible scenarios or complete error handling. It is for illustrative purposes only.

*/

// Book class representing a book object
class Book {
  constructor(title, author, isbn, publicationYear) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publicationYear = publicationYear;
    this.available = true;
  }
}

// Author class representing an author object
class Author {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
}

// Member class representing a library member object
class Member {
  constructor(name, membershipType) {
    this.name = name;
    this.membershipType = membershipType;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.available) {
      this.borrowedBooks.push(book);
      book.available = false;
      console.log(
        `${this.name} has successfully borrowed '${book.title}' by ${book.author.name}.`
      );
    } else {
      console.log(`Sorry, '${book.title}' is currently not available.`);
    }
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index > -1) {
      this.borrowedBooks.splice(index, 1);
      book.available = true;
      console.log(
        `${this.name} has successfully returned '${book.title}' by ${book.author.name}.`
      );
    } else {
      console.log(`You have not borrowed '${book.title}' from the library.`);
    }
  }
}

// Library class representing a library object
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.authors = [];
    this.members = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added book '${book.title}' to the library.`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      console.log(`Removed book '${book.title}' from the library.`);
    } else {
      console.log(`Book '${book.title}' is not found in the library.`);
    }
  }

  addAuthor(author) {
    this.authors.push(author);
    console.log(`Added author '${author.name}' to the library database.`);
  }

  removeAuthor(author) {
    const index = this.authors.indexOf(author);
    if (index > -1) {
      this.authors.splice(index, 1);
      console.log(`Removed author '${author.name}' from the library database.`);
    } else {
      console.log(`Author '${author.name}' is not found in the library database.`);
    }
  }

  addMember(member) {
    this.members.push(member);
    console.log(`Added member '${member.name}' to the library membership.`);
  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index > -1) {
      this.members.splice(index, 1);
      console.log(`Removed member '${member.name}' from the library membership.`);
    } else {
      console.log(`Member '${member.name}' is not found in the library membership.`);
    }
  }

  searchBookByTitle(title) {
    const result = this.books.filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
    return result;
  }

  searchBookByAuthor(authorName) {
    const result = this.books.filter(book =>
      book.author.name.toLowerCase().includes(authorName.toLowerCase())
    );
    return result;
  }
}

// Usage Example
const library = new Library("My Library", "Example City");

const author1 = new Author("John Smith", "USA");
const author2 = new Author("Jane Doe", "Canada");

const book1 = new Book("JavaScript Basics", author1, "ISBN123", 2021);
const book2 = new Book("Advanced CSS", author2, "ISBN456", 2020);

const member1 = new Member("Alice", "Gold");
const member2 = new Member("Bob", "Silver");

library.addAuthor(author1);
library.addAuthor(author2);

library.addBook(book1);
library.addBook(book2);

library.addMember(member1);
library.addMember(member2);

member1.borrowBook(book1); // Alice borrows 'JavaScript Basics' by John Smith
member2.borrowBook(book2); // Bob borrows 'Advanced CSS' by Jane Doe

console.log(library.searchBookByTitle("javascript")); // Search for books with 'javascript' in title (Case-insensitive)
console.log(library.searchBookByAuthor("doe")); // Search for books by author name 'doe' (Case-insensitive)

member1.returnBook(book1); // Alice returns 'JavaScript Basics' by John Smith
member2.returnBook(book2); // Bob returns 'Advanced CSS' by Jane Doe

library.removeMember(member1);
library.removeAuthor(author2);
library.removeBook(book1);

console.log(library); // Print the library object