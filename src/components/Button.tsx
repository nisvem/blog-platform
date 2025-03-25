import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ children, ...attr }) => {
  return (
    <button
      className="block mx-auto bg-accent text-accent-text px-4 py-2 rounded-xl mt-4 hover:cursor-pointer hover:opacity-90 hover:scale-[1.05] transition-all w-full "
      {...attr}
    >
      {children}
    </button>
  );
};