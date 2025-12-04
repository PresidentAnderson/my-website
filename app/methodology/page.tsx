import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investigational Methodology',
  description: 'Structured six-phase investigational protocol ensuring evidentiary integrity, analytical rigor, and defensible conclusions.',
};

export default function Methodology() {
  const phases = [
    {
      number: '01',
      name: 'Intake & Scoping',
      tagline: 'Define parameters and investigational objectives',
      description: 'Comprehensive matter assessment establishing scope, timeline, resource requirements, and success criteria with clear deliverable specifications.',
      activities: [
        'Initial consultation and matter briefing',
        'Conflict screening and independence verification',
        'Scope definition and objective setting',
        'Resource allocation and timeline development',
        'Engagement documentation and authorization',
        'Communication protocol establishment',
      ],
      deliverables: [
        'Engagement letter with defined scope',
        'Project plan with timeline and milestones',
        'Communication and reporting framework',
      ],
    },
    {
      number: '02',
      name: 'Evidence Collection',
      tagline: 'Systematic gathering of relevant materials',
      description: 'Structured evidence acquisition following forensic-grade protocols with documented chain of custody, preservation procedures, and comprehensive cataloging.',
      activities: [
        'Document collection and preservation',
        'Digital evidence forensics and imaging',
        'Witness interview planning and execution',
        'Physical evidence handling and documentation',
        'Third-party record acquisition',
        'Chain of custody documentation',
      ],
      deliverables: [
        'Evidence inventory with cataloging',
        'Interview summaries and transcripts',
        'Digital evidence preservation records',
      ],
    },
    {
      number: '03',
      name: 'Analysis & Synthesis',
      tagline: 'Pattern recognition and hypothesis testing',
      description: 'Rigorous analytical process applying structured frameworks to identify patterns, test hypotheses, and develop evidence-based findings.',
      activities: [
        'Timeline and chronology development',
        'Pattern analysis and anomaly detection',
        'Hypothesis generation and testing',
        'Cross-reference and correlation analysis',
        'Financial analysis and transaction tracing',
        'Expert consultation and technical review',
      ],
      deliverables: [
        'Analytical findings summary',
        'Timeline and chronology documentation',
        'Working hypotheses and supporting evidence',
      ],
    },
    {
      number: '04',
      name: 'Validation',
      tagline: 'Cross-reference and corroboration protocols',
      description: 'Independent verification of findings through multiple evidentiary sources, peer review, and methodological validation to ensure defensibility.',
      activities: [
        'Evidence cross-referencing and verification',
        'Alternative hypothesis evaluation',
        'Peer review of analytical conclusions',
        'Methodological quality assurance',
        'Gap analysis and supplemental investigation',
        'Assumption testing and sensitivity analysis',
      ],
      deliverables: [
        'Validation report with corroboration matrix',
        'Quality assurance documentation',
        'Limitations and assumptions disclosure',
      ],
    },
    {
      number: '05',
      name: 'Reporting',
      tagline: 'Executive summary and detailed findings',
      description: 'Comprehensive written reports and oral briefings presenting findings, supporting evidence, methodology, and limitations with executive-level clarity.',
      activities: [
        'Executive summary preparation',
        'Detailed findings documentation',
        'Supporting evidence compilation',
        'Demonstrative exhibit creation',
        'Methodology and limitations disclosure',
        'Oral briefing and presentation',
      ],
      deliverables: [
        'Executive summary report',
        'Detailed investigational findings',
        'Evidence appendices and supporting materials',
        'Oral briefing presentation',
      ],
    },
    {
      number: '06',
      name: 'Support & Testimony',
      tagline: 'Ongoing consultation and expert testimony',
      description: 'Post-investigation support including testimony preparation, deposition assistance, litigation coordination, and consultation on remediation implementation.',
      activities: [
        'Expert testimony preparation',
        'Deposition and trial support',
        'Regulatory response coordination',
        'Remediation protocol consultation',
        'Follow-up investigation support',
        'Ongoing advisory services',
      ],
      deliverables: [
        'Expert witness reports (as required)',
        'Testimony preparation materials',
        'Remediation recommendations',
        'Ongoing consultation support',
      ],
    },
  ];

  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">METHODOLOGY</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Structured Investigational Protocol
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Every investigation follows a disciplined six-phase methodology designed to ensure evidentiary integrity, analytical rigor, and defensible conclusions.
          </p>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Evidence-Driven Process
            </h2>
            <p className="text-lg text-smoke/70 mb-4">
              JAIC's investigational methodology synthesizes proven techniques from intelligence analysis, forensic accounting, legal discovery, and corporate investigations into a cohesive framework.
            </p>
            <p className="text-lg text-smoke/70">
              The six-phase protocol ensures consistent quality, transparent decision-making, and defensible outcomes regardless of matter complexity or domain area.
            </p>
          </div>
          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-lg">
              Methodological Principles
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3 font-bold">•</span>
                <span className="text-smoke/70 text-sm">Documented protocols with quality checkpoints</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3 font-bold">•</span>
                <span className="text-smoke/70 text-sm">Chain of custody for all evidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3 font-bold">•</span>
                <span className="text-smoke/70 text-sm">Hypothesis testing and alternative analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3 font-bold">•</span>
                <span className="text-smoke/70 text-sm">Independent validation and peer review</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3 font-bold">•</span>
                <span className="text-smoke/70 text-sm">Transparent limitations disclosure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Six Phases - Detailed */}
      <section className="section-container border-t border-slate-100">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Six-Phase Protocol
          </h2>
          <p className="text-lg text-smoke/70 max-w-3xl">
            Linear progression with iterative refinement as investigation develops and new information emerges.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={phase.number} className="evidence-card">
              {/* Phase Header */}
              <div className="flex items-start space-x-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-investigation/20 rounded-lg flex items-center justify-center">
                    <span className="font-technical text-investigation-50 font-bold text-xl">{phase.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-smoke mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-investigation-50 font-medium mb-3">
                    {phase.tagline}
                  </p>
                  <p className="text-smoke/70">
                    {phase.description}
                  </p>
                </div>
              </div>

              {/* Phase Details */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Key Activities */}
                <div>
                  <h4 className="text-sm font-technical text-investigation-50 font-bold mb-4 uppercase tracking-wide">
                    Key Activities
                  </h4>
                  <div className="space-y-2">
                    {phase.activities.map((activity) => (
                      <div key={activity} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-investigation-50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-smoke/80 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-technical text-investigation-50 font-bold mb-4 uppercase tracking-wide">
                    Phase Deliverables
                  </h4>
                  <div className="space-y-3">
                    {phase.deliverables.map((deliverable) => (
                      <div key={deliverable} className="bg-slate-200/20 p-3 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-investigation-50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-smoke/80 text-sm font-medium">{deliverable}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase Connection Arrow (except last phase) */}
              {index < phases.length - 1 && (
                <div className="flex justify-center mt-6">
                  <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Quality Assurance Framework
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              Multiple oversight mechanisms ensure investigational quality, methodological rigor, and defensible conclusions throughout the engagement lifecycle.
            </p>

            <div className="space-y-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Peer Review Protocol
                </h3>
                <p className="text-smoke/70 text-sm">
                  Independent review of analytical conclusions, methodology, and evidentiary support by qualified reviewers not involved in the investigation.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Documentation Standards
                </h3>
                <p className="text-smoke/70 text-sm">
                  Comprehensive documentation of decisions, assumptions, analytical steps, and evidence handling ensuring transparency and replicability.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Methodological Validation
                </h3>
                <p className="text-smoke/70 text-sm">
                  Testing analytical frameworks against established standards, alternative methodologies, and sensitivity to key assumptions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8 sticky top-28">
              <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
                Adaptability Within Structure
              </h3>
              <p className="text-smoke/70 mb-6">
                While the six-phase protocol provides consistent structure, investigations adapt to matter-specific requirements, emerging evidence, and evolving circumstances.
              </p>
              <p className="text-smoke/70 mb-6">
                Phase timing, resource allocation, and specific techniques adjust based on complexity, urgency, and investigational objectives while maintaining methodological integrity.
              </p>
              <div className="pt-6 border-t border-investigation/20">
                <Link href="/services" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                  View Service Applications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Apply This Methodology to Your Matter
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            Begin with a confidential intake consultation to assess investigational requirements and appropriate protocol application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake/start" className="btn-primary">
              Confidential Intake
            </Link>
            <Link href="/case-domains" className="btn-secondary">
              View Case Domains
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
