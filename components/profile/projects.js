import data from '../../app/data';

export default function Projects(props) {
    return <div className="max-w-full mx-auto  lg:pl-24 lg:pr-24  lg:pb-7  p-4">
        <h1 className="text-2xl font-bold mb-4 underline font-mono">{data.projects.title}</h1>
        {data.projects.data.map((item, index) => (
            <a className="p-4 " key={index}
            target="_blank" rel=""   href={item.href}>
                <h1 className="text-xl font-semibold font-mono ">{item.title}</h1>
                <h2 key={index}  className="font-mono"  >{item.href}</h2>
                <ul className="list-disc pl-6 font-mono mt-4">
                    {item.descriptions.map((item, kindex) => (
                        <li key={`${index}-${kindex}`}>{item}</li>
                    ))}
                </ul>
            </a>
        ))}

    </div>
}
