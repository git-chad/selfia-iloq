import React from 'react';
import { type FC, type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-5 md:px-0 xl:max-w-[1068px] 2xl:max-w-[1280px] 3xl:max-w-[1432px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
