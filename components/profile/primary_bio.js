import data from '../../app/data';

export default function ProfilePrimaryBio(props) {
  return <div className='contents'>
    <h1 className="text-2xl text-center lg:text-start">{data.name}</h1>
    <h1 className="pt-1 font-mono text-center lg:text-start">{data.position}</h1>
    <h1 className='font-mono text-center lg:text-start'>{data.company}</h1>
  </div>
}