import data from '../../app/data';

export default function ProfileAboutMe() {
  return (
    <div id="about" className="bg-background-alt py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* About Me Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-10">About Me</h2>
          {data.aboutMe.map((paragraph, index) => (
            <p key={index} className="text-foreground-secondary leading-relaxed text-base mb-5">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-10">{data.skills.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.skills.data.map(({ category, items }) => (
              <div
                key={category}
                className="bg-white rounded-xl p-5 border-l-4 border-primary shadow-sm"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
