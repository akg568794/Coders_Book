import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div className='flex gap-5 border p-5 shadow-md rounded'>
        <Image className='rounded object-contain' src={book.image} alt={book.name} width={0} height={0} sizes='100vw' style={{width:'auto',height:'180px'}}/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-primary-600 text-balance'>{book.name}</h2>
            <p className='font-bold text-primary-900 mt-1'>{book.author}</p>
            <Link className='py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-sm hover:border-primary-100 hover:bg-primary-100 transition' href={`/book/${book.id}`}>Read More</Link>
        </div>
    </div>
  )
}

export default BookCard