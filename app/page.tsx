import ProfilePrimaryBio from '../components/profile/primary_bio'
import ProfileAboutMe from '../components/profile/about_me'
import ProfileImage from '../components/profile/profile_image'
import SocialLink from '../components/profile/social_link'
import EmploymentHistory from '../components/profile/history'
import Projects from '../components/profile/projects'



export default function Home() {
  const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
const year = currentDate.getFullYear();
const currentDateTimeString = `${day}/${month}/${year}`;
console.log(currentDateTimeString);

  return (
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
      <p className='font-mono text-sm'>Updated On {currentDateTimeString}</p>
     </div>
    </main>
  )
}
