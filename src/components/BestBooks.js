// src/components/BestBooks.js
import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('/books')
      .then(response => {
        this.setState({ books: response.data, isLoading: false });
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }

  render() {
    const { books, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading books...</p>
        ) : books.length > 0 ? (
          <Carousel>
            {books.map(book => (
              <Carousel.Item key={book._id}>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No books available.</p>
        )}
      </div>
    );
  }
}

export default BestBooks;
