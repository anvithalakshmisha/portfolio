import React from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="my-16">
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

export default Section;
