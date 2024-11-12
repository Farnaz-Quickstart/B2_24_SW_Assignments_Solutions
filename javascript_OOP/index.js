class Book {
  constructor (title, author, genre, year) {
    this.title = title
    this.author = author
    this.genre = genre
    this.year = year
  }

  getSummary () {
    return `Title: [${this.title}], Author: [${this.author}], Genre: [${this.genre}], Year: [${this.year}]`
  }
}

let book1 = new Book("book1", "farnaz", "genre sample", 2024)


 for (let key in book1) {
  console.log (`${key}: ${book1[key]}`)
 }

 console.log (book1.getSummary())