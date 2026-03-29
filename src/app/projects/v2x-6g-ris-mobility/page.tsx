'use client'

import { useLang } from '@/contexts/LanguageContext'

export default function V2X6GRISPage() {
  const { t } = useLang()

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f', color: '#e4e4e7' }}>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/projects/v2x-6g-ris.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border mb-6" style={{ borderColor: 'rgba(0,240,255,0.3)', color: '#00f0ff', background: 'rgba(0,240,255,0.05)' }}>
            {t.v2x6g.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.v2x6g.title}</h1>
          <p className="text-lg text-gray-400">{t.v2x6g.desc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#00f0ff' }}>{t.projectCommon.abstract}</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.v2x6g.abstractText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#00f0ff' }}>{t.projectCommon.frameworkArchitecture}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t.v2x6g.frameworkDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {t.v2x6g.agents.map((agent, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)' }}>
                    <span className="text-2xl">{agent.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{agent.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#00f0ff' }}>{t.projectCommon.keyResults}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {t.v2x6g.stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-3xl font-bold mb-1 gradient-text">{stat.value}</div>
                  <div className="text-white font-medium text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#00f0ff' }}>{t.projectCommon.technologies}</h2>
            <div className="flex flex-wrap gap-3">
              {t.v2x6g.techTags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full" style={{ border: '1px solid rgba(0,240,255,0.2)', color: '#00f0ff', background: 'rgba(0,240,255,0.05)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Chihi-Sahati/v2x-6g-ris-mobility" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-black" style={{ background: 'linear-gradient(135deg, #00f0ff, #00c8d4)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {t.projectCommon.viewOnGithub}
            </a>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border text-sm uppercase tracking-wider font-bold" style={{ borderColor: 'rgba(0,240,255,0.3)', color: '#00f0ff' }}>
              {t.projectCommon.backToPortfolio}
            </a>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="border-t py-8 px-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p><strong className="text-gray-400">{t.projectCommon.authors}:</strong> AlHussein A. AlSahati, Dr. Houda Chihi</p>
          <p className="mt-1"><strong className="text-gray-400">{t.projectCommon.researchLab}:</strong> InnovCOM Lab of Sup&apos;COM Tunisia</p>
        </div>
      </section>
    </div>
  )
}
