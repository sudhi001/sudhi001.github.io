import data from '../../app/data';

export default function EmploymentHistory() {
  return (
    <div id="experience" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">{data.employmentHistory.title}</h2>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="timeline-line" />

          {data.employmentHistory.data.map((item, index) => {
            const initials = item.company
              .split(' ')
              .slice(0, 2)
              .map((w) => w[0])
              .join('');
            const yearStart = item.duration.split('–')[0].trim();

            return (
              <div className="relative mb-12 last:mb-0" key={index}>
                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{ background: index === 0 ? '#007AFF' : '#5856D6' }}
                />

                {/* Year marker */}
                <div className="absolute -left-16 top-6 text-xs font-semibold text-foreground-secondary hidden sm:block">
                  {yearStart}
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    {/* Company initials badge */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{initials}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">{item.position}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{item.company}</p>
                      <p className="text-foreground-secondary text-xs mt-0.5 mb-4">{item.duration}</p>

                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, kindex) => (
                          <li
                            key={`${index}-${kindex}`}
                            className="text-foreground-secondary text-sm leading-relaxed flex"
                          >
                            <span className="text-primary mr-2 mt-0.5 flex-shrink-0">&#8226;</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
