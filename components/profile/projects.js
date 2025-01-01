import data from '../../app/data';

export default function Projects(props) {
    return (
      <div className="max-w-full mx-auto lg:pl-24 lg:pr-24 lg:pb-7 p-4 text-foreground font-terminal">
        <div className="command text-highlight mb-6">
          <h1 className="text-2xl font-bold underline">{data.projects.title}</h1>
        </div>
  
        {data.projects.data.map((item, index) => (
          <a
            key={index}
            className="block p-4 mt-4 border border-gray-500 rounded-lg hover:bg-background transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href={item.href}
          >
            <h1 className="text-xl font-semibold text-highlight">{item.title}</h1>
            <h2 className="text-sm text-gray-400">{item.href}</h2>
            
            <ul className="list-disc pl-6 font-mono text-foreground mt-4">
              {item.descriptions.map((desc, kindex) => (
                <li key={`${index}-${kindex}`}>{desc}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    );
  }
  