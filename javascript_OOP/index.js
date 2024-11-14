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

let mybook = new Book("title1", "author1", "genre1", "2003")

console.log (mybook.title)
console.log (mybook.author)
console.log (mybook.getSummary())


