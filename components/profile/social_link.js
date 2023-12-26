import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import data from '../../app/data';

export default function SocialLink(props) {
  return <div className="flex items-center justify-center lg:items-start lg:justify-start">
    <div className="grid max-w-60 w-full grid-cols-3">
      {data.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel=""
        >
          <FontAwesomeIcon icon={{ ...faIcons[link.icon] }} />
        </a>
      ))}
    </div>
  </div>
}

// Define FontAwesome icons in an object for dynamic mapping
const faIcons = {
  faGithub,
  faXTwitter,
  faLinkedin
};