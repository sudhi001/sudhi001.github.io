import data from '../../app/data';

export default function EmploymentHistory(props) {
    return <div className="max-w-full mx-auto pt-7 lg:pl-24 lg:pr-24  lg:pb-7  p-4">
        <h2 className="text-2xl font-bold mb-4 underline">{data.employmentHistoryTitle}</h2>
        {data.employmentHistory.map((item, index) => (
            <div className="mb-6" key={index}>
                <p className="text-xl font-semibold ">{item.position},{item.company}</p>
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