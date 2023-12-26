import data from '../../app/data';

export default function Projects(props) {
    return <div className="max-w-full mx-auto  lg:pl-24 lg:pr-24  lg:pb-7  p-4">
        <h2 className="text-2xl font-bold mb-4 underline font-mono">{data.projects.title}</h2>
        {data.projects.data.map((item, index) => (
            <div className="mb-6" key={index}>
                <p className="text-xl font-semibold font-mono ">{item.title}</p>
                <a key={index} href={item.href} className="font-mono" target="_blank" rel="" >{item.href}</a>
                <ul className="list-disc pl-6 font-mono mt-4">
                    {item.descriptions.map((item, kindex) => (
                        <li key={`${index}-${kindex}`}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}

    </div>
}
