import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Anvitha Lakshmisha - Portfolio</title>
      <meta name="description" content="Anvitha Lakshmisha's professional portfolio" />
    </Head>
    <header className="bg-gray-800 p-4 text-white fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anvitha Lakshmisha</h1>
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          {/* <li><a href="#about">About</a></li> */}
          {/* <li><a href="#skills">Skills</a></li> */}
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
    <main className="container mx-auto p-4 pt-16">
      {children}
    </main>
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>&copy; 2024 Anvitha Lakshmisha. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;
