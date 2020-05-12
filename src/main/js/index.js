import "../css/style.css";
import {Book} from "./Book";

let book = new Book("Война и Мир", "Толстой",
    1200);
document.body
    .append(document.createTextNode(book.printInfo()));

console.log(jQuery('a'));

