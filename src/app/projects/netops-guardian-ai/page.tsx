'use client'

import { useLang } from '@/contexts/LanguageContext'

export default function NetOpsGuardianPage() {
  const { t } = useLang()

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f', color: '#e4e4e7' }}>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/projects/netops-guardian.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border mb-6" style={{ borderColor: 'rgba(139,92,246,0.3)', color: '#8b5cf6', background: 'rgba(139,92,246,0.05)' }}>
            {t.netops.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.netops.title}</h1>
          <p className="text-lg text-gray-400">{t.netops.desc}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8b5cf6' }}>{t.projectCommon.overview}</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.netops.abstractText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8b5cf6' }}>{t.projectCommon.coreCapabilities}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.netops.capabilities.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8b5cf6' }}>{t.projectCommon.architectureHighlights}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.netops.metrics.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-2xl font-bold font-mono" style={{ color: '#8b5cf6' }}>{item.metric}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8b5cf6' }}>{t.projectCommon.technologies}</h2>
            <div className="flex flex-wrap gap-3">
              {t.netops.techTags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full" style={{ border: '1px solid rgba(139,92,246,0.2)', color: '#8b5cf6', background: 'rgba(139,92,246,0.05)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Chihi-Sahati/NetOps-Guardian-AI-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-black" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {t.projectCommon.viewOnGithub}
            </a>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border text-sm uppercase tracking-wider font-bold" style={{ borderColor: 'rgba(0,240,255,0.3)', color: '#00f0ff' }}>
              {t.projectCommon.backToPortfolio}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t py-8 px-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p><strong className="text-gray-400">{t.projectCommon.author}:</strong> AlHussein A. AlSahati | <strong className="text-gray-400">{t.projectCommon.supervisor}:</strong> Dr. Houda Chihi</p>
          <p className="mt-1"><strong className="text-gray-400">{t.projectCommon.version}:</strong> 2.3 • <strong className="text-gray-400">{t.projectCommon.target}:</strong> IEEE Network / IEEE TNSM</p>
        </div>
      </section>
    </div>
  )
}
