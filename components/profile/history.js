import data from '../../app/data';

export default function EmploymentHistory(props) {
    return <div className="max-w-full mx-auto  lg:pl-24 lg:pr-24  lg:pb-7  p-4">
        <h1 className="text-2xl font-bold mb-4 underline font-mono">{data.employmentHistory.title}</h1>
        {data.employmentHistory.data.map((item, index) => (
            <div className="p-4" key={index}>
                <h1 className="text-xl font-semibold font-mono ">{item.position}, {item.company}</h1>
                <p className="pb-4 font-mono">{item.duration}</p>
                <ul className="list-disc pl-6 font-mono">
                    {item.responsibilities.map((item, kindex) => (
                        <li key={`${index}-${kindex}`}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}

    </div>
}