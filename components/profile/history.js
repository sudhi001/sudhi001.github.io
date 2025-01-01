import data from '../../app/data';

export default function EmploymentHistory(props) {
  return (
    <div className="max-w-full mx-auto lg:pl-24 lg:pr-24 lg:pb-7 p-4 command text-highlight font-terminal">
      <h1 className="text-2xl font-bold mb-4 underline font-mono text-highlight">{data.employmentHistory.title}</h1>

      {data.employmentHistory.data.map((item, index) => (
        <div className="p-4 bg-background border border-gray-500 rounded-lg mb-6" key={index}>
          <h1 className="text-xl font-semibold font-mono text-highlight">
            {item.position}, {item.company}
          </h1>
          <p className="pb-4 font-mono text-foreground">{item.duration}</p>
          
          <ul className="list-disc pl-6 font-mono text-foreground">
            {item.responsibilities.map((responsibility, kindex) => (
              <li key={`${index}-${kindex}`}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
