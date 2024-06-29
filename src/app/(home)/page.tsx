
import React from 'react'
import Banner from './components/Banner';
import { books } from './booksData/books';
import BookCard from './components/BookCard';


export default function Home(){
  return (
    <>
    <Banner/>
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max max-w-7xl mx-auto'>
      {books.map((book)=>(
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
    </>
  );
}

