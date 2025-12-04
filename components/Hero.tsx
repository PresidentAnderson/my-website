import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Cinematic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-onyx via-slate to-onyx-50">
        <div className="absolute inset-0 bg-gradient-radial from-investigation/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Intelligence Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #171A1F 1px, transparent 1px), linear-gradient(to bottom, #171A1F 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight animate-fade-in">
          Investigational Clarity for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-investigation-50 to-signal-100">
            Complex Realities
          </span>
          .
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-smoke/80 font-body max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Evidence-driven analysis, corporate-grade rigor, and executive discernment for high-stakes matters.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Link
            href="/intake/start"
            id="cta-intake-hero-001"
            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
          >
            Request Confidential Intake
          </Link>
          <Link
            href="/services"
            className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
          >
            Explore Our Capabilities
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-smoke/50 text-sm font-technical">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-investigation rounded-full" />
            <span>Confidential Operations</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-investigation rounded-full" />
            <span>Executive-Grade Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-investigation rounded-full" />
            <span>Evidence-Based Methodology</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-onyx to-transparent" />
    </section>
  );
};

export default Hero;
