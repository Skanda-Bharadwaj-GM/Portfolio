const resumeUrl = 'resume.pdf'

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="bg-card/60 border border-white/5 rounded-2xl overflow-hidden min-h-[70vh]">
        <iframe
          src={resumeUrl}
          className="w-full h-[75vh] border-0"
          title="Resume PDF"
        />
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={resumeUrl}
          download
          className="text-accent hover:underline font-medium text-sm"
        >
          Download resume (PDF)
        </a>
      </div>
    </div>
  )
}

