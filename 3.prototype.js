// Constructor //
function Book(title, author, year) {
     this.title = title;
     this.author = author;
     this.year = year;
}

Book.prototype.summary = function(){
     return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.age = function(){
     const old = new Date().getFullYear()-this.year;
     return `The Book ${this.title} is ${old} years old.`;
}

Book.prototype.change = function(newYear){
     this.year = newYear;
     this.revised = true;
}

const book1 = new Book('Harry Potter','J.K Rowling','1994');
const book2 = new Book('General Theory of Relativity','Albert Einstein','1905');

//console.log(book1);
//console.log(book2);

//console.log(book1.age());
//console.log(book2.age());

console.log(book1.summary());
console.log(book1.age());
book1.change(2001);
console.log(book1.summary());
console.log(book1.age());
