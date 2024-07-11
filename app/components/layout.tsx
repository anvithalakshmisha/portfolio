import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ContactMe from './contactMe';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className='bg-gray-100'>
    <Head>
      <title>Anvitha Lakshmisha - Portfolio</title>
      <meta name="description" content="Anvitha Lakshmisha's professional portfolio" />
    </Head>
    <header className="bg-gray-400 p-4 text-white fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anvitha Lakshmisha</h1>
        <ContactMe/>
        <ul className="flex space-x-4 text-xl">
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </ul>
      </nav>
    </header>
    <main className="container mx-auto p-4 pt-16 text-gray-800">
      {children}
    </main>
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Anvitha Lakshmisha. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;
