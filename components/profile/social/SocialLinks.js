import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter ,faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function SocialLink(props) {
    return  <div className='flex items-center justify-center'>
          <div className="grid w-60 w-full grid-cols-3">
              <a
                href="https://twitter.com/su_dhi"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="n"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              
              <a
                href="https://github.com/sudhi001"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel=""
              >
              <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://in.linkedin.com/in/sudhis"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel=""
              >
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
        </div>
    </div>
  }

