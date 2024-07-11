import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Head>
      <title>Anvitha Lakshmisha - Portfolio</title>
      <meta name="description" content="Anvitha Lakshmisha's professional portfolio" />
    </Head>
    <header className="bg-gray-800 p-4 text-white fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anvitha Lakshmisha</h1>
        <ul className="flex space-x-4">
          <li><Link href="#home">Home</Link></li>
          {/* <li><Link href="#about"><a>About</a></Link></li> */}
          {/* <li><Link href="#skills"><a>Skills</a></Link></li> */}
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          {/* <li><Link href="#contact"><a>Contact</a></Link></li> */}
        </ul>
      </nav>
    </header>
    <main className="container mx-auto p-4 pt-16">
      {children}
    </main>
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Anvitha Lakshmisha. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;
