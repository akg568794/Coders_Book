import React from 'react'
import { books } from '@/app/(home)/booksData/books';
import Image from 'next/image';

const SingleBookPage = ({params}:{params:{bookId:number}}) => {
    console.log('params', params.bookId);
    const id = Number(params.bookId); // Ensure that bookId is a number
    const bookItem = books.find(item => item.id === id);
    console.log(bookItem);
  
    return (
        <div className='mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10'>
            <div className='col-span-2 pr-16 text-primary-950'>
                <h2 className='mb-5 text-5xl font-bold leading-[1.1]'>{bookItem?.name}</h2>
                <span className='font-semibold'>by {bookItem?.author}</span>
                <p className='mt-5 text-lg leading-8'>{bookItem?.description}</p>
            </div>
            <div className='flex justify-end'>
                <Image 
                src={bookItem?.image}
                alt={bookItem?.name}
                className='rounded-md border'
                height={0}
                width={0}
                sizes='100vw'
                style={{width:'auto',height:'auto'}}>
                </Image>

            </div>
            
        </div>
    );
}

export default SingleBookPage;
