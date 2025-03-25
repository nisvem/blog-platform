import React from 'react';

import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { Icon } from '@iconify-icon/react';

import { Post } from '@/types';

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-4">
      <Link href="/" className='flex flex-row items-center gap-3 mb-10'><Icon icon='weui:back-outlined' width={10}/> Back</Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="opacity-80  mb-2">Author: {post.author}</p>
      {/* Так как JSONPlaceholder не возвращает дату, можно задать статическую или пустую дату */}
      <p className="opacity-80 mb-4">
        {new Date(post.createdAt).toLocaleDateString('en-EN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p>{post.description}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PostPageProps> = async (context) => {
  const { slug } = context.query;
  const res = await fetch(process.env.NEXT_URL + `posts/${slug}`);
  const post: Post = await res.json();

  return {
    props: { post },
  };
};