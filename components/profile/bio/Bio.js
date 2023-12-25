import styles from './Bio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faGithub} from '@fortawesome/free-brands-svg-icons';

export default function ProfileBio(props) {
  return <div className={styles.bio}> 
            <h1 className={styles.bioTitle}>Sudhi S</h1>
            <h1 className="pt-2 font-mono">Software Architect</h1>
            <h1 className='font-mono'>Stabilix Solutions Pvt. Ltd. Trivandrum, Kerala, India</h1>
          </div>
}