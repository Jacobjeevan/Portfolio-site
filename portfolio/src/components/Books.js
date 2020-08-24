import React, { Component } from "react";
import { getBooks } from "../actions/books";

export default class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    const books = await getBooks();
    this.setState({ books });
  }

  render() {
    return (
      <div>
        <div className="container pr-0 pl-0">
          <div className="cards-section">
            {this.state.books.map((book) => (
              <img
                src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
                alt={book.title}
                className="cards"
                id="hobbies"
                key={book._id}
              ></img>
            ))}
          </div>
          <p>
            Covers courtesy <a href="https://openlibrary.org">Open Library</a>
          </p>
        </div>
      </div>
    );
  }
}
