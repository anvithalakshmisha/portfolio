"use client"
import { useEffect, useState } from "react";
import Section from "./section";

const HomeSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const introText = "I am a dedicated software engineer with a Master's degree in Information Systems and a proven track record in web and mobile development. Skilled in HTML5, CSS3, JavaScript frameworks, and backend technologies like Node.js and MongoDB. I uphold integrity and collaboration as foundational values in my work, consistently delivering innovative solutions and fostering positive team dynamics. With a passion for continuous learning, I am committed to expanding my expertise in AI and cloud computing. My goal is to leverage technology to solve complex challenges and drive impactful outcomes in the software industry.";

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= introText.length) {
        setText(introText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 30); // Adjust typing speed (ms) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" title="Home">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-center">
          Welcome to Anvithas Portfolio!
        </h1>
        <p className="text-xl mt-4 text-center">
          {text}
          {isTypingComplete && (
            <>
              <span className="text-blue-500"> |</span> {/* Blinking cursor effect */}
            </>
          )}
        </p>
      </div>
    </Section>
  );
};

export default HomeSection;
