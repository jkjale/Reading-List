import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const[books, setBooks] = useState([]);

  const createBook = (theTitle) => {
    const updatedBooks = [
      ...books, 
      {id: Math.round(Math.random() * 9999), title: theTitle}
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}


export default App;