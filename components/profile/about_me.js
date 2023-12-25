import ParaGraph from './para'
import data from '../../app/data';

export default function ProfileAboutMe(props) {
  return <div className="lg:pl-24 lg:pr-24  lg:pb-7  p-4">
    {data.aboutMe.map((paragraph, index) => (
      <ParaGraph key={index} data={paragraph} />
    ))}
    <div className="max-w-full mx-auto  pt-14 ">
      <h1 className="text-2xl font-bold  underline">{data.skillsTitle}</h1>
      <div className="grid  lg:grid-cols-3 mt-7">
        {data.skills.map(({ category, items }) => (
          <div key={category} className="mb-7 mr-7">
            <h2 className="text-xl font-semibold mb-2">{category}:</h2>
            <p className='font-mono'>{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
}