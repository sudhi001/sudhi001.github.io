import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import data from '../../app/data';

export default function SocialLink(props) {
  return (
    <div className="flex justify-center items-center h-full mb-20"> {/* Center the container both horizontally and vertically */}
    <div className="flex justify-center space-x-6 mt-4"> {/* Flex container with spacing between icons */}
      {data.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-white dark:bg-neutral-800 dark:border-neutral-700 hover:border-green-500 hover:bg-gray-100 hover:dark:bg-neutral-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faIcons[link.icon]} className="text-xl text-gray-800 dark:text-white" /> {/* Adjust icon size and color */}
        </a>
      ))}
    </div>
  </div>
  );
}

// Define FontAwesome icons in an object for dynamic mapping
const faIcons = {
  faGithub,
  faXTwitter,
  faLinkedin
};
