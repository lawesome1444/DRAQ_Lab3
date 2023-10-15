function Books(props) {
    const booksDetails = props.booksDetails;
  
    return (
      <div>
        <h3>Books Component</h3>
        <ul>
          {booksDetails.map((book, index) => (
            //This is a template that is filled in with each of the Book List entries in order to
            //create the book list on the READ page.
            <li key={index}>
              <h4>Title: {book.title}</h4>
              <p>ISBN: {book.isbn}</p>
              <p>Authors: {book.authors}</p>
              <p>Status: {book.status}</p>
              <img src={book.imageURL} alt={book.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Books;