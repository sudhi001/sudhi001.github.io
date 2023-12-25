// import styles from './Bio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import data from '../../app/data';

export default function ProfilePrimaryBio(props) {
  return <div className='contents'>
    <h1 className="text-2xl text-center">{data.name}</h1>
    <h1 className="pt-2 font-mono text-center">{data.position}</h1>
    <h1 className='font-mono text-center'>{data.company}</h1>
  </div>
}