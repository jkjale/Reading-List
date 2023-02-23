import { useState } from 'react';


function BookEdit({ book, onSubmit }) {
  const [titless, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, titless);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={titless} onChange={handleChange}/>
      <button className="button is-primary">Save</button>
    </form>
  );
}


export default BookEdit;