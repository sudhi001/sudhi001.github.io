import data from '../../app/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const techKeywords = {
  Android: 'Android',
  Flutter: 'Flutter',
  Go: 'Go',
  React: 'React',
  Python: 'Python',
  'Fast API': 'FastAPI',
  FastAPI: 'FastAPI',
  IoT: 'IoT',
  ESP32: 'ESP32',
  Bluetooth: 'Bluetooth',
  JavaFX: 'JavaFX',
  'Couchbase': 'Couchbase',
  JSON: 'JSON',
  TOML: 'TOML',
  HL7: 'HL7',
  'JetBrains': 'IntelliJ Plugin',
};

function extractTags(descriptions) {
  const tags = new Set();
  const text = descriptions.join(' ');
  for (const [keyword, tag] of Object.entries(techKeywords)) {
    if (text.includes(keyword)) {
      tags.add(tag);
    }
  }
  return Array.from(tags).slice(0, 4);
}

export default function Projects() {
  return (
    <div id="projects" className="bg-background-alt py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">{data.projects.title}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.data.map((item, index) => {
            const tags = extractTags(item.descriptions);
            const isGithub = item.href.includes('github.com');

            return (
              <a
                key={index}
                className="card block p-6 no-underline group"
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <FontAwesomeIcon
                    icon={isGithub ? faGithub : faExternalLinkAlt}
                    className="text-foreground-secondary group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                  />
                </div>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide bg-blue-50 text-primary border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-foreground-secondary text-sm leading-relaxed mt-3">
                  {item.descriptions[0]}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
