"use client";

import React from 'react';
import { books } from '@/app/(home)/booksData/books';
import Image from 'next/image';

const SingleBookPage = ({ params }: { params: { bookId: number } }) => {
    console.log('params', params.bookId);
    const id = Number(params.bookId); // Ensure that bookId is a number
    const bookItem = books.find(item => item.id === id);
    console.log(bookItem);

    return (
        <div className='mx-auto max-w-6xl px-5 py-10 grid gap-10 grid-cols-1 md:grid-cols-3'>
            <div className='md:col-span-2 md:pr-16 text-primary-950'>
                <h2 className='mb-5 text-3xl md:text-5xl font-bold leading-tight md:leading-[1.1]'>{bookItem?.name}</h2>
                <span className='font-semibold'>by {bookItem?.author}</span>
                <p className='mt-5 text-base md:text-lg leading-7 md:leading-8'>{bookItem?.description}</p>
                <button
                    onClick={() => {
                        window.open("https://drive.google.com/file/d/0B0PLtJjhTxnkbzB1TFdKY0JCOTQ/view?resourcekey=0-7RfjLB3mEWTV2HxBUGkLNQ", "_blank");
                    }}
                    className='mt-10 h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700'
                >
                    Download the book
                </button>
            </div>
            <div className='flex justify-center md:justify-end'>
                {bookItem && (
                    <Image
                        src={bookItem.image}
                        alt={bookItem.name}
                        className='rounded-md border'
                        height={0}
                        width={0}
                        sizes='100vw'
                        style={{ width: 'auto', height: '450px' }}
                    />
                )}
            </div>
        </div>
    );
}

export default SingleBookPage;
