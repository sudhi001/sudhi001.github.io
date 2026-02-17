import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import data from '../../app/data';

const brandColors = {
  faGithub: 'hover:bg-gray-800 hover:text-white hover:border-gray-800',
  faXTwitter: 'hover:bg-black hover:text-white hover:border-black',
  faLinkedin: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
};

const faIcons = {
  faGithub,
  faXTwitter,
  faLinkedin,
};

export default function SocialLink() {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {data.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`flex items-center justify-center w-11 h-11 rounded-full border-2 border-gray-200 text-foreground-secondary transition-all duration-300 ${brandColors[link.icon] || ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faIcons[link.icon]} className="text-lg" />
        </a>
      ))}
    </div>
  );
}
