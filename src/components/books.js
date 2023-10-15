import Card from 'react-bootstrap/Card';
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
              <Card style={{width: '18rem'}}>
              <Card.Title>Title: {book.title}</Card.Title>
              <p>Authors: {book.authors}</p>
              <img src={book.imageURL} alt={book.title} />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Books;

  /* Full details code copied for safe keeping and later reference
            <li key={index}>
              <h4>Title: {book.title}</h4>
              <p>ISBN: {book.isbn}</p>
              <p>Authors: {book.authors}</p>
              <p>Status: {book.status}</p>
              <img src={book.imageURL} alt={book.title} />
            </li>
  */