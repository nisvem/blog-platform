import React from 'react';
import { GetServerSideProps } from 'next';
import { useEffect, useMemo } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Post } from '@/types';
import { useBlogStore } from '@/store/blogStore';
import debounce from 'lodash.debounce';

interface HomeProps {
  initialPosts: Post[];
}

export default function Home({ initialPosts }: HomeProps) {
  const { posts, setPosts, searchTerm, setSearchTerm, visibleCount, setVisibleCount } = useBlogStore();

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts, setPosts]);

  // Use a local variable for filtering posts
  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log('filteredPosts:', filteredPosts);

  // Revert handleSearch to use debounce with useMemo
  const handleSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
        setVisibleCount(12);
      }, 300),
    [setSearchTerm, setVisibleCount]
  );

  const sortedPosts = filteredPosts.sort((a, b) => 
     new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="max-w-screen-lg mx-auto py-4 px-4">
      <h1 className="text-4xl font-bold my-3 mb-6 mx-auto  text-left lg:text-center">Blog</h1>
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full shadow rounded-xl p-3 mb-4 text-dark-black outline-blue-500 dark:bg-gray-100"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPosts.slice(0, visibleCount).map((post: Post) => (
          <Card key={post.id} post={post}/>
        ))}
      </div>
      {visibleCount < filteredPosts.length && (
        <Button onClick={() => setVisibleCount(visibleCount + 12)}>Load more</Button>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(process.env.NEXT_URL + 'posts');
  const posts: Post[] = await res.json();

  return {
    props: { initialPosts:posts },
  };
};
