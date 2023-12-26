import ParaGraph from './para'
import data from '../../app/data';

export default function ProfileAboutMe(props) {
  return <div className="lg:pl-24 lg:pr-24  p-4">
    {data.aboutMe.map((paragraph, index) => (
      <ParaGraph key={index} data={paragraph} />
    ))}
    <div className="max-w-full mx-auto mt-14">
      <h1 className="text-2xl font-bold  underline font-mono mb-4">{data.skills.title}</h1>
      <div className="grid  lg:grid-cols-3">
        {data.skills.data.map(({ category, items }) => (
          <div key={category} className="mb-4 mr-7">
            <h2 className="text-xl font-semibold mb-2 font-mono">{category}:</h2>
            <p className='font-mono'>{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
}