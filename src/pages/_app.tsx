import React from 'react';
import { Button } from '@/components/Button';
import { Loader } from '@/components/Loader';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <div className='fixed top-4 right-4 z-60'>
        <Button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? 'Light theme' : 'Dark theme'}
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
