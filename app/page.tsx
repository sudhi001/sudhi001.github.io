'use client';

import Navbar from '../components/profile/navbar'
import ProfilePrimaryBio from '../components/profile/primary_bio'
import ProfileAboutMe from '../components/profile/about_me'
import EmploymentHistory from '../components/profile/history'
import Projects from '../components/profile/projects'
import SocialLink from '../components/profile/social_link'
import data from './data'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProfilePrimaryBio />
      <ProfileAboutMe />
      <EmploymentHistory />
      <Projects />
      <footer className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold text-foreground mb-1">{data.name}</p>
          <p className="text-sm text-foreground-secondary mb-6">{data.position} &middot; {data.company}</p>
          <SocialLink />
          <p className="text-xs text-foreground-secondary mt-4">
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
