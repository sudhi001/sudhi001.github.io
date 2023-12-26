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
    </main>
  )
}
