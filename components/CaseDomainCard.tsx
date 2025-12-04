import Link from 'next/link';

export interface CaseDomainCardProps {
  domainName: string;
  description: string;
  indicators: string[];
  relatedServices: string[];
  href: string;
}

const CaseDomainCard = ({
  domainName,
  description,
  indicators,
  relatedServices,
  href,
}: CaseDomainCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="evidence-card h-full flex flex-col">
        {/* Domain Name */}
        <h3 className="text-2xl font-display font-semibold text-smoke mb-4 group-hover:text-investigation-50 transition-colors">
          {domainName}
        </h3>

        {/* Description */}
        <p className="text-smoke/70 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Indicators Section */}
        {indicators.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-display font-semibold text-smoke/60 uppercase tracking-wider mb-3">
              Key Indicators
            </h4>
            <ul className="space-y-2">
              {indicators.slice(0, 4).map((indicator, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg
                    className="w-5 h-5 text-investigation-50 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-smoke/70 text-sm leading-relaxed">
                    {indicator}
                  </span>
                </li>
              ))}
            </ul>
            {indicators.length > 4 && (
              <p className="text-smoke/50 text-xs mt-3 font-technical">
                +{indicators.length - 4} more indicators
              </p>
            )}
          </div>
        )}

        {/* Related Services Tags */}
        {relatedServices.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100">
            <h4 className="text-xs font-display font-semibold text-smoke/60 uppercase tracking-wider mb-3">
              Related Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((service, index) => (
                <span key={index} className="metadata-chip text-xs">
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Hover Arrow Indicator */}
        <div className="flex items-center text-investigation-50 text-sm font-medium mt-6 group-hover:translate-x-1 transition-transform">
          <span>View domain details</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CaseDomainCard;
