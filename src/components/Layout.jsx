import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, location, children }) => {
  return (
    <div className="min-h-screen grid-layout">
      <Header title={title} location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
