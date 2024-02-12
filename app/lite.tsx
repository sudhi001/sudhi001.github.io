import { useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import ProfilePrimaryBio from '../components/profile/primary_bio';
import ProfileAboutMe from '../components/profile/about_me';
import ProfileImage from '../components/profile/profile_image';
import SocialLink from '../components/profile/social_link';
import EmploymentHistory from '../components/profile/history';
import Projects from '../components/profile/projects';


export default function Home() {
  const currentDate = new Date();
  const currentDateTimeString = currentDate.toLocaleString('en-US');
  return (
    <NextUIProvider>
    
    <main className="flex min-h-screen flex-col items-center lg:items-start ">
      
      <div className="flex grid  lg:grid-cols-2  items-center lg:items-start">
        
        <ProfileImage />
        <div className="pt-7">
          <ProfilePrimaryBio />
          <SocialLink />
        </div>
      </div>
      <ProfileAboutMe />
      <EmploymentHistory />
      <Projects/>
     <div className='flex max-w-full mx-auto mt-14  items-center justify-center'>
      <p className='font-mono text-sm'>Updated On</p>
     </div>
    </main>
    </NextUIProvider>
  )
}