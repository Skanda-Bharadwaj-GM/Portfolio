import SocialLinks from '@/components/SocialLinks'
import { profile } from '@/lib/profile'

export default function IntroPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
          Introduction
        </h1>
        <p className="text-zinc-400 text-sm uppercase tracking-widest">Connect with me</p>
      </div>

      <section className="bg-card/60 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm animate-slide-up">
        <div className="md:flex md:items-start md:gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Hi, I&apos;m <strong className="text-white">Skanda Bharadwaj GM</strong>. I enjoy
              designing, building, and deploying intelligent systems that feel both practical and
              polished. If you&apos;re interested in collaborating on projects around Artificial
              Intelligence, Machine Learning, or full‑stack development, I&apos;d be happy to connect.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I appreciate clean engineering, thoughtful UX, and projects that push me to learn
              something new — whether that&apos;s a model architecture, a better deployment workflow, or
              a new way to visualize data.
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:w-64 space-y-4">
            <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
              Contacts
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <SocialLinks variant="compact" />
            </div>
            <div className="pt-4 border-t border-white/5 text-sm text-zinc-400">
              <p className="font-medium text-zinc-300">Phone</p>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="text-accent hover:underline"
              >
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
