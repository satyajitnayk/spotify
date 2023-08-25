'use client';

import { twMerge } from 'tailwind-merge'; // TODO: dig deeper why to use?

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FunctionComponent<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        bg-neutral-900
        rounded-lg
        h-fit
        w-full
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
