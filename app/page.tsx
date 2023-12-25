import ProfileBio from '../components/profile/bio/Bio'
import ProfileAboutMe from '../components/profile/about/AboutMe'
import ProfileImage from '../components/profile/image/Image'
import SocialLink from '../components/profile/social/SocialLinks'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className="flex grid  lg:grid-cols-2 items-center">
                <ProfileImage/>
                <div className="pt-7 items-center justify-center">
                  <ProfileBio/>
                  <SocialLink/>
                </div>
               
        </div>
      <div className="flex place-items-center  lg:pl-24 lg:pr-24  lg:pb-7  p-4">
      <ProfileAboutMe/>
      </div>
 
    </main>
  )
}
