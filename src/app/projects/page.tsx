import Image from 'next/image'
import { profile } from '@/lib/profile'

const projects = [
  {
    title: 'Justice Lens',
    description:
      'An image restoration framework that deblurs critical text documents for forensic purposes, built using a fine-tuned Swin2SR transformer and OCR for high-fidelity text recovery.',
    href: '#',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'OCR'],
    imageSrc: '/projects/justice-lens.jpg',
    imageAlt: 'Restored text and forensic document imagery for Justice Lens project.',
    gradient: 'from-sky-500/40 via-indigo-500/40 to-fuchsia-500/40',
  },
  {
    title: 'Analog Pressure Gauge Reader',
    description:
      'A web application that automatically reads pressure values directly from factory gauge photos, reducing manual work and minimizing human error using computer vision.',
    href: '#',
    tags: ['Python', 'OpenCV', 'YOLOv8'],
    imageSrc: '/projects/pressure-gauge.jpg',
    imageAlt: 'Industrial pressure gauge close-up representing automated reading.',
    gradient: 'from-emerald-500/40 via-cyan-500/40 to-blue-500/40',
  },
  {
    title: 'Predictive Analysis for Sales',
    description:
      'A cloud‑deployed forecasting system that predicts sales for the next 30 days using historical data, helping teams plan inventory and strategy with around 92% accuracy.',
    href: '#',
    tags: ['Python', 'Scikit-Learn', 'Render'],
    imageSrc: '/projects/sales-forecast.jpg',
    imageAlt: 'Sales charts and forecast lines symbolizing predictive analytics.',
    gradient: 'from-amber-500/40 via-orange-500/40 to-rose-500/40',
  },
  {
    title: 'Indic-Captioning App',
    description:
      'An Indic language captioning app built to translate and generate captions across multiple Indian languages, making audio and video content more accessible for diverse communities. The system processes speech, annotates audio, and produces context-aware translations tailored for real-world, societal impact.',
    href: '#',
    tags: ['Python', 'PyAnnotate', 'Audio Processing'],
    imageSrc: '/projects/indic-captioning.jpg',
    imageAlt: 'Waveforms and multilingual captions representing Indic language translation.',
    gradient: 'from-violet-500/40 via-sky-500/40 to-cyan-400/40',
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
          Projects
        </h1>
        <p className="text-zinc-400 text-sm uppercase tracking-widest">
          Selected work in AI · ML · Vision
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-3">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.href}
            className="group bg-card/60 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/40 hover:bg-card/80 transition-all duration-200 animate-slide-up flex flex-col"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-80 group-hover:opacity-95 transition-opacity`}
              />
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-lg font-display font-semibold text-white group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-slate-950 font-medium text-sm shadow-md shadow-sky-500/30 hover:bg-sky-300 transition-colors"
        >
          View more projects on GitHub
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6h8m0 0v8m0-8L5 19"
            />
          </svg>
        </a>
      </div>
      <p className="text-xs text-zinc-500 mt-4">
        Tip: add images named <code className="bg-white/5 px-1 rounded">justice-lens.jpg</code>,{' '}
        <code className="bg-white/5 px-1 rounded">pressure-gauge.jpg</code>,{' '}
        <code className="bg-white/5 px-1 rounded">sales-forecast.jpg</code>, and{' '}
        <code className="bg-white/5 px-1 rounded">indic-captioning.jpg</code> inside the{' '}
        <code className="bg-white/5 px-1 rounded">public/projects</code> folder to match these cards.
      </p>
    </div>
  )
}
