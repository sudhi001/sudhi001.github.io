'use client';

import ProfilePrimaryBio from '../components/profile/primary_bio'
import ProfileAboutMe from '../components/profile/about_me'
import ProfileImage from '../components/profile/profile_image'
import SocialLink from '../components/profile/social_link'
import EmploymentHistory from '../components/profile/history'
import Projects from '../components/profile/projects'

import { useEffect, useState } from 'react';
// Define the type for the props
interface TypingEffectProps {
  text: string;
}


const TypingEffect = ({ text }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 100); // Speed of typing effect

    if (index === text.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index, text]);

  return <p>{displayedText}</p>;
};

export default function Home() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  const year = currentDate.getFullYear();
  const currentDateTimeString = `${day}/${month}/${year}`;

  return (
    <main className="flex min-h-screen flex-col items-center lg:items-start font-terminal text-foreground terminal bg-background">
  <div className="flex flex-col items-center text-highlight">
  <ProfilePrimaryBio />
  <ProfileAboutMe />
  <EmploymentHistory />
    <Projects />
    </div>
    <div className="flex max-w-full mx-auto mt-14 items-center justify-center command text-highlight pb-7">
      <TypingEffect text={`Updated On ${currentDateTimeString}`} />
    </div>
  </main>
  );
}

