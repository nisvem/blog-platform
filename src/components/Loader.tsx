import React from 'react';
import { Icon } from '@iconify-icon/react';

export const Loader = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-white dark:bg-dark-black z-50'>
      <Icon icon="eos-icons:loading" width={100} className="text-dark-black dark:text-accent"/>
    </div>
  );
};
