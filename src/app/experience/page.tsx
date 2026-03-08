export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
          Experience
        </h1>
        <p className="text-zinc-400 text-sm uppercase tracking-widest">
          Where I&apos;ve applied my skills
        </p>
      </div>

      <section className="bg-card/70 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm animate-slide-up">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <div>
            <h2 className="text-2xl font-display font-semibold text-white">
              SakhaTech Information Systems Pvt. Ltd
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Project Intern · Analog Pressure Gauge Reader
            </p>
          </div>
          <p className="text-zinc-400 text-sm whitespace-nowrap">
            June 25 – July 25
          </p>
        </div>

        <p className="text-zinc-300 leading-relaxed text-base mb-4">
          During my internship at SakhaTech Information Systems Pvt. Ltd, I worked on an{' '}
          <span className="font-medium text-white">Analog Pressure Gauge Reader</span> — a
          computer vision based system that can automatically read values from industrial pressure
          gauges. The goal of the project was to reduce manual readings in factories, minimize
          human error, and make monitoring more reliable and scalable.
        </p>
        <p className="text-zinc-300 leading-relaxed text-base mb-4">
          I contributed to the full pipeline: capturing and preprocessing gauge images, detecting
          the gauge and needle, and converting the pointer position into an accurate digital
          reading. Using Python, OpenCV, and YOLOv8, we built a model that could handle different
          lighting conditions, angles, and gauge types, and integrated it into a web interface so
          operators could upload photos and instantly get readings.
        </p>
        <p className="text-zinc-300 leading-relaxed text-base mb-6">
          As a project intern, I was responsible for data preparation, experimentation with model
          configurations, result analysis, and documentation. This experience strengthened my
          understanding of real‑world computer vision workflows, error handling in practical
          deployments, and how to design ML systems that directly support day‑to‑day operations on
          the factory floor.
        </p>

        <div className="flex flex-wrap gap-2">
          {['Python', 'OpenCV', 'YOLOv8', 'Computer Vision', 'Model Experimentation'].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-zinc-200 border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

