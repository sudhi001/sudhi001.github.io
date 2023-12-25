import ProfileBio from '../components/profile/bio/Bio'
import ProfileAboutMe from '../components/profile/about/AboutMe'
import styles from '../styles/home.module.css'
import ProfileImage from '../components/profile/image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <div className="relative left-0 top-0 flex w-full justify-center pt-7">
             <div className={styles.column}>
                 <ProfileImage/>
              </div>
              <div className="pl-14 pt-7">
                <ProfileBio/>
              </div>
        </div>
      </div>
      <div className="flex place-items-center  pl-24 pr-24  pb-7">
      <ProfileAboutMe/>
      </div>
      <div className="mb-16 grid min-w-20 max-w-40 w-full mb-0 grid-cols-2 text-center ">
        <a
          href="https://twitter.com/su_dhi"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter}  />
        </a>

        <a
          href="https://github.com/sudhi001"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faGithub}  />
        </a>
      </div>
    </main>
  )
}
