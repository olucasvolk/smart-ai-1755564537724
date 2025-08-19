import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container mx-auto mt-8'>
      {children}
    </div>
  );
};

export default Layout;