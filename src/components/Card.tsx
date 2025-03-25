import React from 'react';
import { Post } from '@/types';
import Link from 'next/link';

interface ICard extends React.HTMLAttributes<HTMLElement> {
  post: Post;
}

export const Card: React.FC<ICard> = ({ post, ...atr }) => {
  return (
    <Link href={`/blog/${post.id}`}

      className='bg-white rounded-xl text-dark-black p-4 flex flex-col h-full transition-all cursor-pointer shadow hover:bg-accent'
      {...atr}
    >
      <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
      <p className='mb-auto'>{post.description.slice(0, 100)}...</p>
      <div className='flex flex-row gap-4 justify-between'>
      <p className='text-xs opacity-85 mt-2'>
        {new Date(post.createdAt).toLocaleDateString('en-EN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p className='text-xs opacity-85 mt-2'>{post.author}</p>
      </div>

    </Link>
  );
};
