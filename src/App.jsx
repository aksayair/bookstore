import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [book, setBook] = useState({ title: '', author: '', year: '', isbn: '', price: '' });
  const [books, setBooks] = useState([]);

  const colDefs = [
    { field: 'title', filter: true },
    { field: 'author', filter: true },
    { field: 'year', filter: true },
    { field: 'isbn', filter: true },
    { field: 'price', filter: true },
    {
      headerName: '',
      field: 'id',
      cellRenderer: params => (
        <Button 
          size="small" 
          color="error" 
          onClick={() => deleteBook(params.value)}
        >
          Delete
        </Button>
      )
    }
  ];

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const querySnapshot = await getDocs(collection(db, 'books'));
    const bookData = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
    setBooks(bookData);
  };

  const addBook = async () => {
    await addDoc(collection(db, 'books'), book);
    getBooks();
    setBook({ title: '', author: '', year: '', isbn: '', price: '' });
  };

  const deleteBook = async (id) => {
    await deleteDoc(doc(db, 'books', id));
    getBooks();
  };

  return (
    <>
      <h1>Bookstore</h1>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <TextField
          label="Title"
          value={book.title}
          onChange={e => setBook({ ...book, title: e.target.value })}
        />
        <TextField
          label="Author"
          value={book.author}
          onChange={e => setBook({ ...book, author: e.target.value })}
        />
        <TextField
          label="Year"
          value={book.year}
          onChange={e => setBook({ ...book, year: e.target.value })}
        />
        <TextField
          label="ISBN"
          value={book.isbn}
          onChange={e => setBook({ ...book, isbn: e.target.value })}
        />
        <TextField
          label="Price"
          value={book.price}
          onChange={e => setBook({ ...book, price: e.target.value })}
        />
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={addBook}
        >
          Add Book
        </Button>
      </Stack>
      <div className="ag-theme-material" style={{ height: 500, margin: '20px' }}>
        <AgGridReact
          rowData={books}
          columnDefs={colDefs}
        />
      </div>
    </>
  );
}

export default App;