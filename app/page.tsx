import ProfilePrimaryBio from '../components/profile/primary_bio'
import ProfileAboutMe from '../components/profile/about_me'
import ProfileImage from '../components/profile/profile_image'
import SocialLink from '../components/profile/social_link'
import EmploymentHistory from '../components/profile/history'


export default function Home() {
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
     <div className='flex max-w-full mx-auto mt-14  items-center justify-center'>
      <p className='font-mono'>https://Su-dhi.in</p>
      <a href="https://visitcount.itsvg.in">
        <img src="https://visitcount.itsvg.in/api?id=sudhi&label=Profile%20Views&color=12&icon=0&pretty=true" />
      </a>
     </div>
    </main>
  )
}
