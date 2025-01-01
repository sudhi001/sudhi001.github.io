import { useState } from 'react';
import Image from 'next/image';
import data from '../../app/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import SocialLink from './social_link';


export default function ProfilePrimaryBio(props) {

  // Function to scroll down and show more content
  const scrollToMoreContent = () => {
    // Scroll down to the content that will be shown after pressing Enter or clicking
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section (below the fold)
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  // Handle the Enter key event
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      scrollToMoreContent();
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-black text-white font-mono"
      tabIndex={0} // Make div focusable to capture keyboard events
      onKeyDown={handleKeyDown} // Trigger scroll when Enter is pressed
    >
      <div className="text-center">
        {/* Profile Image */}
        <Image
          src="/profile.jpg"
          alt="Profile Image"
          width={200}
          height={200}
          className="inline-block h-40 w-40 rounded-full ring-2 ring-gray-500 object-cover mb-14"
        />

        {/* Name, Position, Company */}
        <h1 className="text-3xl font-bold text-green-500 typing-animation">{data.name}</h1>
        <h2 className="pt-1 text-xl text-green-300 typing-animation">{data.position}</h2>
        <h2
  className="pt-1 text-sm text-green-300 typing-animation text-center mx-auto px-4 sm:px-0 max-w-[300px] sm:max-w-[600px] overflow-hidden"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 6,
    WebkitBoxOrient: 'vertical',
  }}
>
  {data.shortDescription}
</h2>



        <h3 className="text-lg text-gray-400 typing-animation">{data.company}</h3>


        <SocialLink />
        {/* Scroll Down Indicator with Text */}
        <div
          className="mt-8 text-center animate-bounce cursor-pointer"
          onClick={scrollToMoreContent} // Scroll when clicked
        >
          <FontAwesomeIcon icon={faArrowDown} className="text-3xl text-gray-400 mb-2" />
          <p className="text-gray-400 text-sm">Press Enter or Click to Show More</p>
        </div>

      </div>
    </div>
  );
}
