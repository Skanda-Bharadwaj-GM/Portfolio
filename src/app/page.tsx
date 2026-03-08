'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const HEADLINE = 'Hi, I am Skanda Bharadwaj GM'

const skills = [
  { name: 'Python', category: 'Language', short: 'Py' },
  { name: 'Java', category: 'Language', short: 'Ja' },
  { name: 'C', category: 'Language', short: 'C' },
  { name: 'HTML & CSS', category: 'Frontend', short: 'FE' },
  { name: 'MySQL', category: 'Database', short: 'SQL' },
  { name: 'PostgreSQL', category: 'Database', short: 'PG' },
  { name: 'Supabase', category: 'Backend', short: 'SB' },
  { name: 'TensorFlow', category: 'Deep Learning', short: 'TF' },
  { name: 'Keras', category: 'Deep Learning', short: 'Ke' },
  { name: 'Scikit-Learn', category: 'ML', short: 'SK' },
  { name: 'YOLOv8', category: 'Computer Vision', short: 'Y8' },
  { name: 'OpenCV', category: 'Computer Vision', short: 'CV' },
  { name: 'PyTorch', category: 'Deep Learning', short: 'PT' },
  { name: 'NumPy', category: 'Data', short: 'NP' },
  { name: 'Pandas', category: 'Data', short: 'Pd' },
]

const skillIcons: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'HTML & CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  Keras: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
  'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  YOLOv8: '', // devicon does not provide YOLOv8 logo; fallback to text
  OpenCV: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  PyTorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
}

function TypingHeadline() {
  const [text, setText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(HEADLINE.slice(0, index + 1))
      index += 1
      if (index >= HEADLINE.length) {
        clearInterval(interval)
      }
    }, 70)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
      <span className="gradient-text">{text}</span>
      <span className="inline-block w-[1px] h-7 sm:h-8 align-middle bg-accent ml-1 animate-pulse" />
    </h1>
  )
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-10 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-slate-900/60 to-slate-950/90">
        <Image
          src="/ai-hero.png"
          alt="AI brain and circuits background"
          fill
          priority
          className="object-cover opacity-15 mix-blend-screen pointer-events-none select-none"
        />
        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <TypingHeadline />
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Aspiring Machine Learning Engineer · Bengaluru, India
          </p>
        </div>
      </div>

      <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
        <p>
          I&apos;m a Bachelor of Engineering student in Artificial Intelligence and Machine Learning at BNM Institute
          of Technology. I love building intelligent systems that turn messy, real-world data into impactful products.
          My journey so far has been a mix of math, models, and a lot of experimentation.
        </p>
        <p>
          I work across the ML stack — from cleaning and exploring data, to training and fine‑tuning models, to
          deploying them as usable applications. My toolkit includes Python, Java, C, modern web technologies, and
          machine learning frameworks such as TensorFlow, Keras, Scikit‑Learn, YOLOv8, OpenCV, PyTorch, NumPy, and
          Pandas, along with databases like MySQL, PostgreSQL, and Supabase.
        </p>
        <p>
          Outside of code, I&apos;m a passionate bike rider and cricketer. Long rides help me reset, think clearly, and
          draw inspiration from the world around me, while cricket keeps me grounded in teamwork, strategy, and
          discipline. These interests balance my life — they fuel my energy, teach me patience, and often give me fresh
          perspectives that I bring back into my projects.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
          Skills &amp; Tools
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/50 hover:bg-white/10 transition-colors px-4 py-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950/70 flex items-center justify-center shadow-lg shadow-accent/30 border border-accent/40 overflow-hidden">
                {skillIcons[skill.name] ? (
                  <Image
                    src={skillIcons[skill.name]}
                    alt={`${skill.name} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-[10px] font-semibold text-slate-100">
                    {skill.short}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{skill.name}</p>
                <p className="text-[11px] uppercase tracking-wide text-zinc-500">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
