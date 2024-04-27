// Задание 1: "Управление библиотекой книг"

// Реализуйте объект Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

const Book = {
  title: "",
  author: "",
  pages: "",
  displayInfo() {
    console.log(
      `Название книги - "${this.title}". Ее автор - ${this.author}. В ней ${this.pages} страниц.`
    );
  },
  setTitle(newTitle) {
    this.title = newTitle;
  },
  setAuthor(newAuthor) {
    this.author = newAuthor;
  },
  setPages(newPages) {
    this.pages = newPages;
  },
};

Book.setAuthor("Antoine de Saint-Exupéry");
Book.setTitle("Le Petit Prince");
Book.setPages(107);
Book.displayInfo();
