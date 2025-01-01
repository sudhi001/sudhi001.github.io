import ParaGraph from './para';
import data from '../../app/data';

export default function ProfileAboutMe(props) {
  return (
    <div className="lg:pl-24 lg:pr-24 p-4 command text-highlight font-terminal">
      {/* About Me Section */}
      <div className="pb-6">
        <h1 className="text-2xl font-bold underline font-mono text-highlight">About Me</h1>
        {data.aboutMe.map((paragraph, index) => (
          <ParaGraph key={index} data={paragraph} />
        ))}
      </div>

      {/* Skills Section */}
      <div className="max-w-full mx-auto mt-14">
        <h1 className="text-2xl font-bold underline font-mono mb-4 text-highlight">{data.skills.title}</h1>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {data.skills.data.map(({ category, items }) => (
            <div key={category} className="p-4 bg-background border border-gray-500 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 font-mono text-highlight">{category}:</h2>
              <p className="font-mono text-foreground">{items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
