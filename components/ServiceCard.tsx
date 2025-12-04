import Link from 'next/link';

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

const ServiceCard = ({ title, description, href, tags = [] }: ServiceCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="evidence-card h-full flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-smoke mb-3 group-hover:text-investigation-50 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-smoke/70 text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="metadata-chip text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Hover Arrow Indicator */}
        <div className="flex items-center text-investigation-50 text-sm font-medium group-hover:translate-x-1 transition-transform">
          <span>Learn more</span>
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

export default ServiceCard;
