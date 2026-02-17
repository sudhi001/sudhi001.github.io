import Image from 'next/image';
import data from '../../app/data';
import SocialLink from './social_link';

export default function ProfilePrimaryBio() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white overflow-hidden pt-14">
      {/* Subtle top gradient */}
      <div className="hero-gradient" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto py-16">
        {/* Profile Image with gradient ring */}
        <div className="flex justify-center mb-10">
          <div className="gradient-ring">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={160}
              height={160}
              className="h-40 w-40 rounded-full object-cover bg-white"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-extrabold gradient-text mb-4">
          {data.name}
        </h1>

        {/* Position badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold">
            {data.position}
          </span>
        </div>

        {/* Experience chip */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-foreground-secondary text-xs font-medium">
            12+ Years of Experience
          </span>
        </div>

        {/* Professional tagline */}
        <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-lg mx-auto mb-2">
          Architecting scalable solutions across Healthcare, Insurance &amp; Identity Management
        </p>

        {/* Company & Location */}
        <p className="text-sm text-foreground-secondary mb-8">
          {data.company} &middot; {data.location}
        </p>

        <SocialLink />
      </div>
    </div>
  );
}
